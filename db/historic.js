const mongoose = require('mongoose');

// Historical record schema
const historicsSchema = new mongoose.Schema({
    unit: { type: mongoose.Types.ObjectId, ref: 'units', required: true }, // Reference to the unit
    timestamp: { type: Date, default: Date.now }, // When the alarm occurred
    realvalues: { type: Map, of: Number }, // Snapshot of realvalues at the time
    realbooleans: { type: Map, of: Boolean }, // Snapshot of realbooleans at the time
    alarmTriggered: { type: Number }, // The key that triggered the alarm
    packetNum: {type: Number},
    createdAt: {
        type: Date,
        default: Date.now,
        expires: '90d', // Automatically delete the record after 90 days
    }
});

module.exports = mongoose.model('historics', historicsSchema);