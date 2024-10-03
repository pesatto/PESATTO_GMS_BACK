const mongoose = require('mongoose');

const commands = new mongoose.Schema({
    command: {
      type: String,
      required: true,
    },
    hostid: {
      type: String,
      required: true
    },
    code: {
      type: String,
      required: true,
    },
    creator: { 
        type: mongoose.Types.ObjectId, ref: "users",
        required: true 
    },
    units: { 
        type: mongoose.Types.ObjectId, ref: "units",
        required: true 
    },
    status: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
  });
  
  module.exports = mongoose.model('commands', commands);