const express = require('express')
const router = express.Router();

router.get('/',(req,res)=>{
    console.log("Hello world")
    res.send("this is router")
})

module.exports = router