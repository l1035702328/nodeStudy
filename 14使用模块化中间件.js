const parser = require('./13自定义模块进行模块化')

const express = require('express')
const app = express()

app.use(parser)

app.listen(80,()=>{
    console.log("激活")
})