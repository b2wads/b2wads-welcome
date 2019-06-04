// Express
const express = require("express")
const app = express()

// Middlewares
app.use(express.json())

// Routes
app.use("/", require("./routes"))

module.exports = app
