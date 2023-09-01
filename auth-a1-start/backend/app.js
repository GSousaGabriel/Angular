const express = require("express")
const mongoose = require("mongoose")
const userRouters = require("./routes/users")
const bodyParser = require("body-parser")

const app = express()

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

    if (req.method === "OPTIONS") {
        return res.sendStatus(200)
    }
    next()
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // application/json

app.use(userRouters)

mongoose.connect("mongodb+srv://pasteu008:123@cluster0.yjo5rgo.mongodb.net/auth").then((success) => {
    app.listen(8080)
}).catch((e) => {
    console.log(e)
})
