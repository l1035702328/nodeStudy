const express = require('express')
const app = express()

const qs = require('querystring')


app.use((req,res,next)=>{
    let str = ''
    req.on('data',(chunk)=>{
        str += chunk
    })
    req.on('end',()=>{
        const body = qs.parse(str)
        req.body = body
        console.log(body)
        next()
    })
})

app.post('/',(req,res)=>{
    console.log(req.body)
    res.send("is ok")
})

app.listen(80,()=>{
    console.log("启动")
})