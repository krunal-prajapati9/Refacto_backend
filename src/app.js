const express= require('express')
const airoute =require('./routes/ai.routes')
const cors = require('cors')
const helmet = require('helmet');
const app =express()
app.use(cors())
app.use(express.json())


app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      fontSrc: ["'self'", 'data:'],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      connectSrc: ["*"], // for APIs
      imgSrc: ["'self'", "data:"],
    },
  })
);
app.get("/", (req,res) => {
    res.send("Hey server is runnning successfully")
})


app.use("/ai" , airoute)

module.exports = app