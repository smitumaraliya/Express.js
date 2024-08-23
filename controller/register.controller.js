const User = require('../model/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

exports.registerUser = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email, isDelete: false })
        if (user) {
            return res.json({ message: 'User Already Existed...' })
        }
        let hashPassword = await bcrypt.hash(req.body.password, 7)
        console.log(hashPassword);
        user = await User.create({ ...req.body, password: hashPassword })
        res.status(201).json({ user, message: 'Register Successfully...' })
        // console.log(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error...' })
    }
}

exports.loginUser = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email, isDelete: false })
        if (!user) {
            return res.json({ message: 'User Not Found...' })
        }
        let comparedPassword = await bcrypt.compare(req.body.password, user.password)
        // console.log(comparedPassword);
        if (!comparedPassword) {
            return res.json({ message: 'Email or Password does not matched' })
        }
        let token = await jwt.sign({ userId: user._id }, process.env.JWT_TOKEN)
        res.status(200).json({ message: 'Login Successfully...', token })
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error...' })
    }
}

exports.getProfile = async (req, res) => {
    try {
        res.json(req.user)
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal Server Error...' })
    }
}