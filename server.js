const express = require('express')
const morgan = require('morgan')
const users = require('./friend.json')

const server = express();

server.use(morgan('dev'));
server.use(express.json())
server.use(express.urlencoded({ extended: false }))

// const fs = require('fs')
// const data = fs.readFileSync('./friend.json', 'utf-8')
// console.log(users);

// const myFun = (req, res, next) => {
//     // console.log(req.query);
//     if (req.query.id >= "20") {
//         console.log('success');
//         next();
//     }
//     else {
//         res.json({ message: "Sorry Brother..." })
//     }
// }

// server.use(myFun);

// POST, GET, PUT/RETRIEVE, PATCH/UPDATE, DELETE

// server.get('/', (req, res) => {
//     res.send('Welcome');
// })

// CURD
// Create User

server.post("/user", (req, res) => {
    // console.log(req.body);
    users.push(req.body);
    res.json({ message: "Added Successfully" })
})

server.listen(1111, () => {
    console.log("Server Started at http://127.0.0.1:1111");
})