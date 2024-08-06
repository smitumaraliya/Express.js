const express = require('express')

const server = express();

server.get('/', (req, res) => {
    res.setHeader('Content-type', 'application/json')
    res.send('Server Started...')
    res.end()
})

server.get('/admin', (req, res) => {
    res.setHeader('Content-type', 'application/json')
    res.send('Server Started at Admin page...')
    res.end()
})

server.listen(1111, () => {
    console.log("Server Started at http://127.0.0.1:1111");
})