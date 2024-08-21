require('dotenv').config();
const express = require("express");
const morgan = require("morgan");
const URL = process.env.MONGO_URL;
const PORT = process.env.PORT;
const userRoutes = require('./routes/user.routes')
const mongoose = require('mongoose')

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded(({ extended: false })))


app.get("/", (req, res) => {
    (
        res.send("Welcome to Express Server")
    )
});

app.use('/api', userRoutes)

app.listen(PORT, () => {
    mongoose.connect(URL)
        .then(() => console.log('Server Connection Sucessfully'))
        .catch((err => console.log(err)))
    console.log(`Server Staeted at http://127.0.0.1:${PORT}`);
})