const express =require('express');
const router = express.Router();

const aicontroler = require("../controllers/ai.controler")

router.post("/get-review",aicontroler.Getresponse)



module.exports = router;