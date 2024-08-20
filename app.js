const express = require("express");
const morgan = require("morgan");
const userRoutes = require('./routes/user.routes')
const mongoose = require('mongoose')

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded(({ extended: false })))

mongoose.connect('mongodb://127.0.0.1:27017/NodeJS')
    .then(() => console.log('Server Connection Sucessfully'))
    .catch((err => console.log(err)))

app.get("/", (req, res) => {
    (
        res.send("Welcome to Express Server")
    )
});

app.use('/api/user', userRoutes)

app.listen(1221, () => {
    console.log('Server Staeted at http://127.0.0.1:1221');
})