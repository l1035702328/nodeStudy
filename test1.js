const http = require('http')
const server = http.createServer()
server.on('request',(req,res)=>{
    console.log("hello world")
    console.log(req.url)
    res.setHeader("Content-type","text/html;charset=utf-8")
    res.end("response响应")
})
server.listen(80,()=>{
    console.log("server running at http://127.0.0.1")
})
