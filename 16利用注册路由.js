
const express = require("express")
const app = express()
const router1 = require('./15挂载路由router')
app.use('/api',router1)

app.listen(80,()=>{
    console.log("激活")
})
