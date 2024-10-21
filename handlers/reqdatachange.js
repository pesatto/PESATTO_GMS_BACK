const db = require("../db/units")
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
                                startIndex += 1
                            }

                        }
                    }
                })
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