const express= require('express')
const airoute =require('./routes/ai.routes')
const cors = require('cors')
const app =express()

app.get("/", (req,res) => {
    res.send("Hey server is runnning successfully")
})

app.use(cors())
app.use(express.json())

app.use("/ai" , airoute)

module.exports = app