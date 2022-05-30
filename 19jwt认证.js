const express = require('express')
const app = express()

//安装并导入JWT相关的两个包
const jwt = require('jsonwebtoken')
const {expressjwt:expressJWT} = require('express-jwt')

//允许跨域资源共享
const cors= require('cors')
app.use(cors())

//解析表单中间件
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

//定义secret密钥
const secretKey = 'itemlzzhello'
//注册将JWT字符串解析还原成JSON对象的中间件 unless除xx之外
//配置成功了express-jwt这个中间件，就可以把解析出来的用户信息，挂载到req.user属性上
app.use(expressJWT({secret:secretKey,algorithms:["HS256"]}).unless({path:[/^\/api\//]}))

app.post('/api/login',function(req,res){
const userinfo = req.body
console.log(userinfo)
if(userinfo.username !== 'admin'|| userinfo.password!=='fei123456'){
    return res.send({
        status:400,
        message:'登录失败!'
    })
}
//参数2加密的密钥 参数3配置对象 可配置当前token的有效期
//一定不要将密码用于token的加密
    res.send({
        status:200,
        message:"登录成功",
        token:jwt.sign({username:userinfo.username},secretKey,{expiresIn:'30s'})
    })
})

app.get('/admin/getinfo',(req,res)=>{
    console.log(req.auth)
    res.send({
        status:200,
        message:'获取用户信息成功',
        data:req.auth,
    })
})

app.get('/api/hello',()=>{
    console.log("hello world")
})

app.use((err,req,res,next)=>{
    if(err.name == "UnauthorizedError"){
        res.send({
            status:'401',
            message:'token过期'
        })
    }
    res.send({
        status:500,
        message:"未知错误"
    })
})

app.listen(80,()=>{
    console.log("服务启动成功")
})