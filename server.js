const { log } = require('console');
const express = require('express')

const server = express();

// const data = require('./friend.json')
const fs = require('fs')
const data = fs.readFileSync('./friend.json', 'utf-8')
console.log(data);

const myFun = (req, res, next) => {
    // console.log(req.query);
    if(req.query.id >= "20"){
        console.log('success');
        next();
    }
    else{
        res.json({message: "Sorry Brother..."})
    }
}

server.use(myFun);

// POST, GET, PUT/RETRIEVE, PATCH/UPDATE, DELETE

server.get('/', (req, res) => {
    // res.setHeader('Content-type', 'text/html')
    res.status(250)
    res.send('Server Started at get method...')
    res.end()
})
server.get('/user', (req, res) => {
    res.json(JSON.parse(data))
})
// server.post('/', (req, res) => {
//     res.send('Server Started at post method...')
//     res.end()
// })
// server.put('/', (req, res) => {
//     res.send('Server Started at put method...')
//     res.end()
// })
// server.patch('/', (req, res) => {
//     res.send('Server Started at patch method...')
//     res.end()
// })
// server.delete('/', (req, res) => {
//     res.send('Server Started at delete method...')
//     res.end()
// })

// server.get('/admin', (req, res) => {
//     res.setHeader('Content-type', 'application/json')
//     res.send('Server Started at Admin page...')
//     res.end()
// })

server.listen(1111, () => {
    console.log("Server Started at http://127.0.0.1:1111");
})