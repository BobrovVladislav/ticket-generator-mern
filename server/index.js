const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const authRouter = require("./routes/auth.routes")

const app = express()
const PORT = config.get('serverPort')
const corsMiddleware = require("./middleware/cors.middleware")

app.use(corsMiddleware)
app.use(express.json())
app.use(express.static('static'))
app.use("/api/auth", authRouter)

const start = async function () {
    try {
        await mongoose.connect(config.get("dbUrl"))

        app.listen(PORT, function () {
            console.log('Server has been started on port ', PORT)
        })
    } catch (e) {
        console.log(e)
    }
}

start()