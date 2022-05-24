express = require('express')
app = express()


app.use((req,res,next)=>{
    console.log("这是一个简单的中间件函数")
    next()
})

app.use(express.json())

app.get('/',(req,res)=>{
    console.log("hello")
    throw new Error("错误")
    res.send("hello world")
})

app.post('/',(req,res)=>{
    console.log("hello")
    // throw new Error("错误")
    console.log(req.body)
    res.send("hello world")
})
app.use((err,req,res,next)=>{
    console.log("中间件捕获到程序异常")
    res.send("错误中间件捕获到的错误")
})


app.get('/id',(req,res,next)=>{
    console.log("局部中间件")
    next()
},(req,res)=>{
    console.log("hello")
    res.send("hello world id")
})


app.listen(80,()=>{
    console.log("监听80")
    }
)