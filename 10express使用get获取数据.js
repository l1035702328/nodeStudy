const express = require('express')
const app = express()
app.listen(80,()=>{
    console.log("hello express")

})

app.use('/lzz',express.static('./clock'))

app.get("/hello",(req,res)=>{
    msg = req.query
    console.log(msg)
    res.send("helloworld")
})

app.get("/hello/:id",(req,res)=>{
    console.log(req.params)
})
app.post('/user',(req,res)=>{
    res.send("this is post")
})