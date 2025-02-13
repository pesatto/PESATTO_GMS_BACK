const db = require("../db/units")
const logger = require("../logger")
module.exports = (data, socket) => {
    logger.info("Unit " + data.hostid + " Auth Correctly")
    socket.write(JSON.stringify({
        "method": "login",
        "result":
        {
            "register": 1,
            "historic": "38.194.224.218:8251",
            "liveData": "38.194.224.218:8251",
            "realTime": Date.now(),
            "para_command": "01010000004EBC3E;01030000002D85D7;0103002E000AA5C4",
            "con_command": "01010000004EBC3E;01030000002D85D7;0103002E000AA5C4",
            "online_rate": 3000,
            "offline_rate": 3000,
            "reset_packet_num": 1500,
            "data_mode": 0,
            "moduletype": "HGM6100",
            "modulePort": 2,
            "moduleBaud": 0,
        },
        "retcode": "000000"
    }
    ))



}