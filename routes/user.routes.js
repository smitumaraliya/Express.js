const express = require('express')
const userRoutes = express.Router();

// const { addNewUser, getAllUser, getUser, replaceUser, updateUser, deleteUser } = require('../controller/user.controller')

const { registerUser } = require('../controller/register.controller')

// userRoutes.post('/', addNewUser);

// userRoutes.get('/', getAllUser);

// userRoutes.get('/get-user', getUser);

// userRoutes.patch('/', updateUser);

// userRoutes.delete('/', deleteUser);

userRoutes.post('/register', registerUser);

module.exports = userRoutes;