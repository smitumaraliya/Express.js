const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    firstName: String,
    lastName: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    age: {
        type: Number
    },
    password: {
        type: String
    },
    mobileNo: {
        type: String
    },
    profileImage: {
        type: String
    },
    hobbies: [{ type: String }],
    address: {
        line1: String,
        line2: String,
        pincode: Number
    },
    isDelete: {
        type: Boolean,
        default: false
    }
}, {
    versionKey: false,
    timestamps: true
})

module.exports = mongoose.model('users', userSchema)