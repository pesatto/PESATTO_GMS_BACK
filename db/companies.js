const mongoose = require('mongoose');

const companies = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    rfc: {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

companies.pre('save', async function save(next) {
    try {
        this.name = this.name.toUpperCase()
        this.rfc = this.rfc.toUpperCase()
        return next();
    } catch (err) {
        return next(err);
    }
});

module.exports = mongoose.model('companies', companies)
