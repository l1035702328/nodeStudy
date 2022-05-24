const express = require('express')
const app = express()

const router = require('./路由模板');
app.use(router)


app.listen(80,()=>{
    console.log("hello express")
})

