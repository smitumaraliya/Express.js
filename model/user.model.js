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
    }
})

module.exports = mongoose.model('users', userSchema)