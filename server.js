const express = require('express')

const server = express();


// POST, GET, PUT/RETRIEVE, PATCH/UPDATE, DELETE

server.get('/', (req, res) => {
    res.setHeader('Content-type', 'text/html')
    res.send('Server Started at get method...')
    res.end()
})
server.post('/', (req, res) => {
    res.send('Server Started at post method...')
    res.end()
})
server.put('/', (req, res) => {
    res.send('Server Started at put method...')
    res.end()
})
server.patch('/', (req, res) => {
    res.send('Server Started at patch method...')
    res.end()
})
server.delete('/', (req, res) => {
    res.send('Server Started at delete method...')
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