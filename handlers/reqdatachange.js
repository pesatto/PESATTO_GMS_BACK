const db = require("../db/units")
const histo = require("../db/historic")
const util = require('util');
const logger = require("../logger");

const convertParams = (hexArray) => {
    const convertedObject = {};

    hexArray.forEach(item => {
        for (const hexKey in item) {
            if (item.hasOwnProperty(hexKey)) {
                const key = parseInt(hexKey, 16);
                const value = parseInt(item[hexKey], 16);
                convertedObject[key] = value;
            }
        }
    });

    return convertedObject;
};


module.exports = (data, socket) => {
    params = data.params
    db.units.findOne({ hostid: data.hostid }).then(actual => {
        if (actual) {
            let alarm = true

            if (params['longitude']) {
                actual.latitude = params.latitude
                actual.longitude = params.longitude
                actual.altitude = params.altitude
            }
            if (params['03']) {
                params['03'].forEach(item => {
                    for (const hexKey in item) {
                        if (item.hasOwnProperty(hexKey)) {
                            const key = parseInt(hexKey, 16);
                            const value = parseInt(item[hexKey], 16);
                            actual.realvalues[key] = value;
                        }
                    }
                });


            }
            if (params['01']) {
                params['01'].forEach(param => {
                    for (const hexKey in param) {
                        if (param.hasOwnProperty(hexKey)) {
                            let startIndex = parseInt(hexKey, 16);
                            binFile = parseInt(param[hexKey], 16).toString(2).padStart(8, '0').split("").reverse().join("")
                            for (const c of binFile) {
                                //actual.realvalues[key] = value;
                                actual.realbooleans[startIndex] = c;
                                if ([0, 1, 2].includes(startIndex)) {
                                    alarm = True
                                }
                                startIndex += 1


                            }

                        }
                    }
                })


            }

            if (alarm) {
                let hi = {
                    unit: actual._id, // Reference the unit's ID
                    packetNum: params['packetnum'],
                    realvalues: actual.realvalues, // Save the current realvalues snapshot
                    realbooleans: actual.realbooleans, // Save the current realbooleans snapshotg
                }
                histo.create(hi).then(res => logger.info("New Historic in saved for unit " + actual.hostid)).catch(e => logger.error("Error on historic", e))
            }

            actual.connected = true
            db.units.updateOne({ hostid: data.hostid }, { $set: actual }).exec()
        }
    })


    try {

        logger.info("Socket Status Not Connected:" + socket.destroyed)
        if (socket.destroyed == false) {
            socket.write(JSON.stringify({ "method": "reqdata", "message": "OK", "retcode": "000000" }))
        }

    } catch (e) {
        logger.error("Error Trying to Send " + e)
    }

}