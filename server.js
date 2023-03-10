// command center
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bikerRoutes = require('./routes/biker-routes')

const db = require('./config/db')
const PORT = 8000


mongoose.set('strictQuery', true)

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express()

app.use(cors({ origin: `http://127.0.0.1:5500` }))


app.use(express.json())

app.use(bikerRoutes)

app.listen(PORT, () => {
    console.log('listening on ' + PORT)
})

module.exports = app