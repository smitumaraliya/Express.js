const mongoose = require('mongoose')

let userSchema = mongoose.Schema({
    firstName: String,
    lastName: {
        Type: String
    },
    email: {
        Type: String,
    },
    age: {
        Type: String
    },
    hobbies: [{ Type: String }],
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