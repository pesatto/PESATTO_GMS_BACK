const mongoose = require('mongoose');

const models = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true,
    },
    power: {
      type: Number,
      required: true,
    },
    voltaje: {
        type: Number,
        required: true, 
    },
    hz: {
        type: Number,
        required: true,
    },
    rpm: {
        type: Number,
        required: true,
    },
    battery: {
        type: Number,
        required: true
    },
    temp: {
        type: Number,
        required: true
    },
    oil: {
        type: Number,
        required: true
    },
    amps: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
  });
  
  module.exports = mongoose.model('models', models);