const express = require('express')
const app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

const session = require('express-session')
const res = require('express/lib/response')
app.use(session({
    secret:'lzz',
    resave:false,
    saveUninitialized:true
}))

app.post('/api/login',(req,res)=>{
    console.log(req.body.username)
    if(req.body.username != 'admin'||req.body.password!='fei123456'){
        return res.send({status:1,msg:"登录失败"})
    }
    req.session.user = req.body
    req.session.islogin = true
    res.send({status:0,msg:'登录成功'})
})

app.get('/api/user',(req,res)=>{
    if(!req.session.islogin){
        return res.send({status:1,msg:'fail'})
    }
    return res.send({status:0,msg:'success',username:req.session.user.username})
})

app.get('/api/logout',(req,res)=>{
    req.session.destroy()
    res.send({
        status:0,
        msg:"退出登录成功"
    })
})

app.listen(80,()=>{
    console.log("启动成功")
})