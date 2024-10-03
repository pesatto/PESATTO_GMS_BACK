const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const users = new mongoose.Schema({
    fullname: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        unique: true,
    },
    user_type: {
        type: Number,
        default: 0 //0 = Viewer User, 1 = Company With Commands ,2 = Company Admin User, 3 = Pesatto Viewer, 4 = Pesatto Regist User ,5 = Pesatto Admin
    },
    userpassword: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    },
    company: { type: mongoose.Types.ObjectId, ref: "companies" },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

users.pre('save', async function save(next) {
    if (!this.isModified('userpassword')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.userpassword = await bcrypt.hash(this.userpassword, salt);
        return next();
    } catch (err) {
        return next(err);
    }
});

users.pre('updateOne', async function (next) {
    const update = this.getUpdate();
    if (update.$set.userpassword) {
        try {
            const salt = await bcrypt.genSalt(10);
            delete update.userpassword
            const hashedPassword = await bcrypt.hash(update.$set.userpassword, salt);
            update.$set.userpassword = hashedPassword;
            console.log(update)
        } catch (err) {
            console.log(err)
            return next(err);
        }
    }
    next();
});

users.methods.validatePassword = async function (password) {
    return bcrypt.compare(password, this.userpassword);
};



module.exports = mongoose.model('users', users)