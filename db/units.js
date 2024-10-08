const mongoose = require('mongoose');

const units = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    serial: {
        type: String,
        required: true,
        unique: true
    },
    hostid: {
        type: String,
        required: true,
        unique: true,
    },
    simcard: {
        type: String,
        required: true,
        default: ""
    },
    longitude: {
        type: Number,
        default: 0
    },
    latitude: {
        type: Number,
        default: 0
    },
    altitude: {
        type: Number,
        default: 0
    },
    connected: {
        type: Boolean,
        default: false
    },
    model: { type: mongoose.Types.ObjectId, ref: "models" },
    company: { type: mongoose.Types.ObjectId, ref: "companies" },
    genvalues: [{ type: mongoose.Types.ObjectId, ref: "genvalues" }],
    realvalues: {
        0: { type: Number, default: 0 },
        1: { type: Number, default: 0 },
        2: { type: Number, default: 0 },
        3: { type: Number, default: 0 },
        4: { type: Number, default: 0 },
        5: { type: Number, default: 0 },
        6: { type: Number, default: 0 },
        7: { type: Number, default: 0 },
        8: { type: Number, default: 0 },
        9: { type: Number, default: 0 },
        10: { type: Number, default: 0 },
        11: { type: Number, default: 0 },
        12: { type: Number, default: 0 },
        13: { type: Number, default: 0 },
        14: { type: Number, default: 0 },
        15: { type: Number, default: 0 },
        16: { type: Number, default: 0 },
        17: { type: Number, default: 0 },
        18: { type: Number, default: 0 },
        19: { type: Number, default: 0 },
        20: { type: Number, default: 0 },
        21: { type: Number, default: 0 },
        22: { type: Number, default: 0 },
        23: { type: Number, default: 0 },
        24: { type: Number, default: 0 },
        25: { type: Number, default: 0 },
        26: { type: Number, default: 0 },
        27: { type: Number, default: 0 },
        28: { type: Number, default: 0 },
        29: { type: Number, default: 0 },
        30: { type: Number, default: 0 },
        31: { type: Number, default: 0 },
        32: { type: Number, default: 0 },
        33: { type: Number, default: 0 },
        34: { type: Number, default: 0 },
        35: { type: Number, default: 0 },
        36: { type: Number, default: 0 },
        37: { type: Number, default: 0 },
        38: { type: Number, default: 0 },
        39: { type: Number, default: 0 },
        40: { type: Number, default: 0 },
        41: { type: Number, default: 0 },
        42: { type: Number, default: 0 },
        43: { type: Number, default: 0 },
        44: { type: Number, default: 0 },
        45: { type: Number, default: 0 },
        46: { type: Number, default: 0 },
        47: { type: Number, default: 0 },
        48: { type: Number, default: 0 },
        49: { type: Number, default: 0 },
        50: { type: Number, default: 0 },
        51: { type: Number, default: 0 },
        52: { type: Number, default: 0 },
        53: { type: Number, default: 0 },
        54: { type: Number, default: 0 },
        55: { type: Number, default: 0 },
        56: { type: Number, default: 0 },
        57: { type: Number, default: 0 },
        58: { type: Number, default: 0 },
        59: { type: Number, default: 0 },
        60: { type: Number, default: 0 },
        61: { type: Number, default: 0 },
        62: { type: Number, default: 0 },
        63: { type: Number, default: 0 },
        64: { type: Number, default: 0 },
        65: { type: Number, default: 0 },
        66: { type: Number, default: 0 },
        67: { type: Number, default: 0 },
        68: { type: Number, default: 0 },
        69: { type: Number, default: 0 },
        70: { type: Number, default: 0 },
        71: { type: Number, default: 0 },
        72: { type: Number, default: 0 },
        73: { type: Number, default: 0 },
        74: { type: Number, default: 0 },
        75: { type: Number, default: 0 },
        76: { type: Number, default: 0 },
        77: { type: Number, default: 0 },
        78: { type: Number, default: 0 },
        79: { type: Number, default: 0 },
        80: { type: Number, default: 0 },
        81: { type: Number, default: 0 },
        82: { type: Number, default: 0 },
        83: { type: Number, default: 0 },
        84: { type: Number, default: 0 },
        85: { type: Number, default: 0 },
        86: { type: Number, default: 0 },
        87: { type: Number, default: 0 },
        88: { type: Number, default: 0 },
        89: { type: Number, default: 0 },
        90: { type: Number, default: 0 },
        91: { type: Number, default: 0 },
        92: { type: Number, default: 0 },
        93: { type: Number, default: 0 },
        94: { type: Number, default: 0 },
        95: { type: Number, default: 0 },
        96: { type: Number, default: 0 },
        97: { type: Number, default: 0 },
        98: { type: Number, default: 0 },
        99: { type: Number, default: 0 },
        100: { type: Number, default: 0 },
        101: { type: Number, default: 0 },
        102: { type: Number, default: 0 },
        103: { type: Number, default: 0 },
        104: { type: Number, default: 0 },
        105: { type: Number, default: 0 },
        106: { type: Number, default: 0 },
        107: { type: Number, default: 0 },
        108: { type: Number, default: 0 },
        109: { type: Number, default: 0 },
        110: { type: Number, default: 0 },
        111: { type: Number, default: 0 },
        112: { type: Number, default: 0 },
        113: { type: Number, default: 0 },
        114: { type: Number, default: 0 },
        115: { type: Number, default: 0 },
        116: { type: Number, default: 0 }
    },
    genbooleans: [{ type: mongoose.Types.ObjectId, ref: "genbooleans" }],
    realbooleans: {
        0: { type: Boolean, default: 0 },
        1: { type: Boolean, default: 0 },
        2: { type: Boolean, default: 0 },
        3: { type: Boolean, default: 0 },
        4: { type: Boolean, default: 0 },
        5: { type: Boolean, default: 0 },
        6: { type: Boolean, default: 0 },
        7: { type: Boolean, default: 0 },
        8: { type: Boolean, default: 0 },
        9: { type: Boolean, default: 0 },
        10: { type: Boolean, default: 0 },
        11: { type: Boolean, default: 0 },
        12: { type: Boolean, default: 0 },
        13: { type: Boolean, default: 0 },
        14: { type: Boolean, default: 0 },
        15: { type: Boolean, default: 0 },
        16: { type: Boolean, default: 0 },
        17: { type: Boolean, default: 0 },
        18: { type: Boolean, default: 0 },
        19: { type: Boolean, default: 0 },
        20: { type: Boolean, default: 0 },
        21: { type: Boolean, default: 0 },
        22: { type: Boolean, default: 0 },
        23: { type: Boolean, default: 0 },
        24: { type: Boolean, default: 0 },
        25: { type: Boolean, default: 0 },
        26: { type: Boolean, default: 0 },
        27: { type: Boolean, default: 0 },
        28: { type: Boolean, default: 0 },
        29: { type: Boolean, default: 0 },
        30: { type: Boolean, default: 0 },
        31: { type: Boolean, default: 0 },
        32: { type: Boolean, default: 0 },
        33: { type: Boolean, default: 0 },
        34: { type: Boolean, default: 0 },
        35: { type: Boolean, default: 0 },
        36: { type: Boolean, default: 0 },
        37: { type: Boolean, default: 0 },
        38: { type: Boolean, default: 0 },
        39: { type: Boolean, default: 0 },
        40: { type: Boolean, default: 0 },
        41: { type: Boolean, default: 0 },
        42: { type: Boolean, default: 0 },
        43: { type: Boolean, default: 0 },
        44: { type: Boolean, default: 0 },
        45: { type: Boolean, default: 0 },
        46: { type: Boolean, default: 0 },
        47: { type: Boolean, default: 0 },
        48: { type: Boolean, default: 0 },
        49: { type: Boolean, default: 0 },
        50: { type: Boolean, default: 0 },
        51: { type: Boolean, default: 0 },
        52: { type: Boolean, default: 0 },
        53: { type: Boolean, default: 0 },
        54: { type: Boolean, default: 0 },
        55: { type: Boolean, default: 0 },
        56: { type: Boolean, default: 0 },
        57: { type: Boolean, default: 0 },
        58: { type: Boolean, default: 0 },
        59: { type: Boolean, default: 0 },
        60: { type: Boolean, default: 0 },
        61: { type: Boolean, default: 0 },
        62: { type: Boolean, default: 0 },
        63: { type: Boolean, default: 0 },
        64: { type: Boolean, default: 0 },
        65: { type: Boolean, default: 0 },
        66: { type: Boolean, default: 0 },
        67: { type: Boolean, default: 0 },
        68: { type: Boolean, default: 0 },
        69: { type: Boolean, default: 0 },
        70: { type: Boolean, default: 0 },
        71: { type: Boolean, default: 0 },
        72: { type: Boolean, default: 0 },
        73: { type: Boolean, default: 0 },
        74: { type: Boolean, default: 0 },
        75: { type: Boolean, default: 0 },
        76: { type: Boolean, default: 0 },
        77: { type: Boolean, default: 0 },
        78: { type: Boolean, default: 0 },
        79: { type: Boolean, default: 0 },
        80: { type: Boolean, default: 0 },
        81: { type: Boolean, default: 0 },
        82: { type: Boolean, default: 0 },
        83: { type: Boolean, default: 0 },
        84: { type: Boolean, default: 0 },
        85: { type: Boolean, default: 0 },
        86: { type: Boolean, default: 0 },
        87: { type: Boolean, default: 0 },
        88: { type: Boolean, default: 0 },
        89: { type: Boolean, default: 0 },
        90: { type: Boolean, default: 0 },
        91: { type: Boolean, default: 0 },
        92: { type: Boolean, default: 0 },
        93: { type: Boolean, default: 0 },
        94: { type: Boolean, default: 0 },
        95: { type: Boolean, default: 0 },
        96: { type: Boolean, default: 0 },
        97: { type: Boolean, default: 0 },
        98: { type: Boolean, default: 0 },
        99: { type: Boolean, default: 0 },
        100: { type: Boolean, default: 0 },
        101: { type: Boolean, default: 0 },
        102: { type: Boolean, default: 0 },
        103: { type: Boolean, default: 0 },
        104: { type: Boolean, default: 0 },
        105: { type: Boolean, default: 0 },
        106: { type: Boolean, default: 0 },
        107: { type: Boolean, default: 0 },
        108: { type: Boolean, default: 0 },
        109: { type: Boolean, default: 0 },
        110: { type: Boolean, default: 0 },
        111: { type: Boolean, default: 0 }
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    lastupdate: {
        type: Date,
        default: Date.now(),
    }
});


const genValues = new mongoose.Schema({
    0: { type: Number, default: 0 },
    1: { type: Number, default: 0 },
    2: { type: Number, default: 0 },
    3: { type: Number, default: 0 },
    4: { type: Number, default: 0 },
    5: { type: Number, default: 0 },
    6: { type: Number, default: 0 },
    7: { type: Number, default: 0 },
    8: { type: Number, default: 0 },
    9: { type: Number, default: 0 },
    10: { type: Number, default: 0 },
    11: { type: Number, default: 0 },
    12: { type: Number, default: 0 },
    13: { type: Number, default: 0 },
    14: { type: Number, default: 0 },
    15: { type: Number, default: 0 },
    16: { type: Number, default: 0 },
    17: { type: Number, default: 0 },
    18: { type: Number, default: 0 },
    19: { type: Number, default: 0 },
    20: { type: Number, default: 0 },
    21: { type: Number, default: 0 },
    22: { type: Number, default: 0 },
    23: { type: Number, default: 0 },
    24: { type: Number, default: 0 },
    25: { type: Number, default: 0 },
    26: { type: Number, default: 0 },
    27: { type: Number, default: 0 },
    28: { type: Number, default: 0 },
    29: { type: Number, default: 0 },
    30: { type: Number, default: 0 },
    31: { type: Number, default: 0 },
    32: { type: Number, default: 0 },
    33: { type: Number, default: 0 },
    34: { type: Number, default: 0 },
    35: { type: Number, default: 0 },
    36: { type: Number, default: 0 },
    37: { type: Number, default: 0 },
    38: { type: Number, default: 0 },
    39: { type: Number, default: 0 },
    40: { type: Number, default: 0 },
    41: { type: Number, default: 0 },
    42: { type: Number, default: 0 },
    43: { type: Number, default: 0 },
    44: { type: Number, default: 0 },
    45: { type: Number, default: 0 },
    46: { type: Number, default: 0 },
    47: { type: Number, default: 0 },
    48: { type: Number, default: 0 },
    49: { type: Number, default: 0 },
    50: { type: Number, default: 0 },
    51: { type: Number, default: 0 },
    52: { type: Number, default: 0 },
    53: { type: Number, default: 0 },
    54: { type: Number, default: 0 },
    55: { type: Number, default: 0 },
    56: { type: Number, default: 0 },
    57: { type: Number, default: 0 },
    58: { type: Number, default: 0 },
    59: { type: Number, default: 0 },
    60: { type: Number, default: 0 },
    61: { type: Number, default: 0 },
    62: { type: Number, default: 0 },
    63: { type: Number, default: 0 },
    64: { type: Number, default: 0 },
    65: { type: Number, default: 0 },
    66: { type: Number, default: 0 },
    67: { type: Number, default: 0 },
    68: { type: Number, default: 0 },
    69: { type: Number, default: 0 },
    70: { type: Number, default: 0 },
    71: { type: Number, default: 0 },
    72: { type: Number, default: 0 },
    73: { type: Number, default: 0 },
    74: { type: Number, default: 0 },
    75: { type: Number, default: 0 },
    76: { type: Number, default: 0 },
    77: { type: Number, default: 0 },
    78: { type: Number, default: 0 },
    79: { type: Number, default: 0 },
    80: { type: Number, default: 0 },
    81: { type: Number, default: 0 },
    82: { type: Number, default: 0 },
    83: { type: Number, default: 0 },
    84: { type: Number, default: 0 },
    85: { type: Number, default: 0 },
    86: { type: Number, default: 0 },
    87: { type: Number, default: 0 },
    88: { type: Number, default: 0 },
    89: { type: Number, default: 0 },
    90: { type: Number, default: 0 },
    91: { type: Number, default: 0 },
    92: { type: Number, default: 0 },
    93: { type: Number, default: 0 },
    94: { type: Number, default: 0 },
    95: { type: Number, default: 0 },
    96: { type: Number, default: 0 },
    97: { type: Number, default: 0 },
    98: { type: Number, default: 0 },
    99: { type: Number, default: 0 },
    100: { type: Number, default: 0 },
    101: { type: Number, default: 0 },
    102: { type: Number, default: 0 },
    103: { type: Number, default: 0 },
    104: { type: Number, default: 0 },
    105: { type: Number, default: 0 },
    106: { type: Number, default: 0 },
    107: { type: Number, default: 0 },
    108: { type: Number, default: 0 },
    109: { type: Number, default: 0 },
    110: { type: Number, default: 0 },
    111: { type: Number, default: 0 },
    112: { type: Number, default: 0 },
    113: { type: Number, default: 0 },
    114: { type: Number, default: 0 },
    115: { type: Number, default: 0 },
    116: { type: Number, default: 0 },
    timestamp: {
        type: Date,
        default: Date.now,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: '90d'  // TTL index: records will be deleted after 90 days
    }
});

const genBooleans = new mongoose.Schema({
    1: { type: Boolean, default: 0 },
    2: { type: Boolean, default: 0 },
    3: { type: Boolean, default: 0 },
    4: { type: Boolean, default: 0 },
    5: { type: Boolean, default: 0 },
    6: { type: Boolean, default: 0 },
    7: { type: Boolean, default: 0 },
    8: { type: Boolean, default: 0 },
    9: { type: Boolean, default: 0 },
    10: { type: Boolean, default: 0 },
    11: { type: Boolean, default: 0 },
    12: { type: Boolean, default: 0 },
    13: { type: Boolean, default: 0 },
    14: { type: Boolean, default: 0 },
    15: { type: Boolean, default: 0 },
    16: { type: Boolean, default: 0 },
    17: { type: Boolean, default: 0 },
    18: { type: Boolean, default: 0 },
    19: { type: Boolean, default: 0 },
    20: { type: Boolean, default: 0 },
    21: { type: Boolean, default: 0 },
    22: { type: Boolean, default: 0 },
    23: { type: Boolean, default: 0 },
    24: { type: Boolean, default: 0 },
    25: { type: Boolean, default: 0 },
    26: { type: Boolean, default: 0 },
    27: { type: Boolean, default: 0 },
    28: { type: Boolean, default: 0 },
    29: { type: Boolean, default: 0 },
    30: { type: Boolean, default: 0 },
    31: { type: Boolean, default: 0 },
    32: { type: Boolean, default: 0 },
    33: { type: Boolean, default: 0 },
    34: { type: Boolean, default: 0 },
    35: { type: Boolean, default: 0 },
    36: { type: Boolean, default: 0 },
    37: { type: Boolean, default: 0 },
    38: { type: Boolean, default: 0 },
    39: { type: Boolean, default: 0 },
    40: { type: Boolean, default: 0 },
    41: { type: Boolean, default: 0 },
    42: { type: Boolean, default: 0 },
    43: { type: Boolean, default: 0 },
    44: { type: Boolean, default: 0 },
    45: { type: Boolean, default: 0 },
    46: { type: Boolean, default: 0 },
    47: { type: Boolean, default: 0 },
    48: { type: Boolean, default: 0 },
    49: { type: Boolean, default: 0 },
    50: { type: Boolean, default: 0 },
    51: { type: Boolean, default: 0 },
    52: { type: Boolean, default: 0 },
    53: { type: Boolean, default: 0 },
    54: { type: Boolean, default: 0 },
    55: { type: Boolean, default: 0 },
    56: { type: Boolean, default: 0 },
    57: { type: Boolean, default: 0 },
    58: { type: Boolean, default: 0 },
    59: { type: Boolean, default: 0 },
    60: { type: Boolean, default: 0 },
    61: { type: Boolean, default: 0 },
    62: { type: Boolean, default: 0 },
    63: { type: Boolean, default: 0 },
    64: { type: Boolean, default: 0 },
    65: { type: Boolean, default: 0 },
    66: { type: Boolean, default: 0 },
    67: { type: Boolean, default: 0 },
    68: { type: Boolean, default: 0 },
    69: { type: Boolean, default: 0 },
    70: { type: Boolean, default: 0 },
    71: { type: Boolean, default: 0 },
    72: { type: Boolean, default: 0 },
    73: { type: Boolean, default: 0 },
    74: { type: Boolean, default: 0 },
    75: { type: Boolean, default: 0 },
    76: { type: Boolean, default: 0 },
    77: { type: Boolean, default: 0 },
    78: { type: Boolean, default: 0 },
    79: { type: Boolean, default: 0 },
    80: { type: Boolean, default: 0 },
    81: { type: Boolean, default: 0 },
    82: { type: Boolean, default: 0 },
    83: { type: Boolean, default: 0 },
    84: { type: Boolean, default: 0 },
    85: { type: Boolean, default: 0 },
    86: { type: Boolean, default: 0 },
    87: { type: Boolean, default: 0 },
    88: { type: Boolean, default: 0 },
    89: { type: Boolean, default: 0 },
    90: { type: Boolean, default: 0 },
    91: { type: Boolean, default: 0 },
    92: { type: Boolean, default: 0 },
    93: { type: Boolean, default: 0 },
    94: { type: Boolean, default: 0 },
    95: { type: Boolean, default: 0 },
    96: { type: Boolean, default: 0 },
    97: { type: Boolean, default: 0 },
    98: { type: Boolean, default: 0 },
    99: { type: Boolean, default: 0 },
    100: { type: Boolean, default: 0 },
    101: { type: Boolean, default: 0 },
    102: { type: Boolean, default: 0 },
    103: { type: Boolean, default: 0 },
    104: { type: Boolean, default: 0 },
    105: { type: Boolean, default: 0 },
    106: { type: Boolean, default: 0 },
    107: { type: Boolean, default: 0 },
    108: { type: Boolean, default: 0 },
    109: { type: Boolean, default: 0 },
    110: { type: Boolean, default: 0 },
    111: { type: Boolean, default: 0 },
    timestamp: {
        type: Date,
        default: Date.now,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: '90d'  // TTL index: records will be deleted after 90 days
    }
});

units.pre('updateOne', async function (next) {
    const update = this.getUpdate();
    update.$set.lastupdate = Date.now();
    next();
});

exports.values = mongoose.model('genValues', genValues)
exports.booleans = mongoose.model('genBooleans', genBooleans)

exports.units = mongoose.model('units', units);