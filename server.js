const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const routes = require('./Routes/routes')
app.use(express.json())

app.use('/upload', routes)

mongoose.connect(process.env.MONG_URI)
    .then(() => {
        app.listen((process.env.PORT), () => {
            console.log('Connected to DB and listening to post ', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })