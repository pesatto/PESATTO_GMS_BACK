const net = require("net")
const loginHD = require("./handlers/login")
const reqdaHD = require("./handlers/reqdatachange")
const util = require('util')
const { units } = require("./db/units")
const clients = new Map();
const command = require("./db/commands")
const server = net.createServer()
const logger = require('./logger'); // Import the logger

server.on("connection", (socket) => {
    socket.setKeepAlive(true)
    socket.setTimeout(15000)

    socket.on("data", (data) => {
        try {
            let info = JSON.parse(data.toString())
            logger.info(JSON.stringify(info))
            handleLogin(socket, info.hostid)

            switch (info.method) {
                case "login":
                    loginHD(info, socket)
                    break;
                case "reqdatachange":
                    reqdaHD(info, socket)
                    break;
                case "LongCon":
                    socket.write(JSON.stringify({ "method": "LongCon", "message": "OK", "retcode": "000000" }))
                    break;
                default:
                    logger.info("Method Default", info)
                    socket.write(JSON.stringify({ "method": info.method, "message": "OK", "retcode": "000000" }))
                    break;
            }

        }
        catch (e) {
            logger.error("Error parsing socket data", e)
        }
    })

    socket.on("close", () => {
        handleLogout()
    })

    socket.on('timeout', () => {
        handleLogout()
    })

    socket.on('error', (err) => {
        logger.error('Socket error:', err)
        handleLogout()
    })
})

server.listen(8251, '0.0.0.0', () => {
    logger.info("Socket Listening")
    units.updateMany({}, { $set: { connected: false } }).then(r => logger.info("All Genset Reset"))
});

command.watch().on('change', (newData) => {
    if (newData.operationType == 'insert') {
        if (newData.fullDocument.status == false) {
            let document = newData.fullDocument

            let generated = {
                "result": document.code,
                "datatype": 1,
                "uid": "1",
                "method": "writeConfig"
            }

            try {
                let client = clients.get(document.hostid)
                if (client && !client.destroyed) {
                    client.write(JSON.stringify(generated), (err) => {
                        if (err) {
                            logger.error("Error Sending Command" + err)
                            units.updateOne({ hostid: document.hostid }, { $set: { connected: false } }).exec()
                        }
                    })
                }
               
                command.updateOne({ _id: document._id }, { $set: { status: true } }).exec()
            } catch (e) {
                units.updateOne({ hostid: document.hostid }, { $set: { connected: false } }).exec()
            }
        }
    }
})

function handleLogout() {
    clients.forEach((values, key) => {
        if (values.destroyed) {
            clients.delete(key)
            units.updateOne({ hostid: key }, { $set: { connected: false } }).exec()
        }
    })
}

function handleLogin(socket, hostidME) {
    if (!clients.has(hostidME)) {
        clients.set(hostidME, socket)
    }
}
