const express = require('express')

const server = express();

server.listen(1111, () => {
    console.log("Server Started at http://127.0.0.1:1111");
})