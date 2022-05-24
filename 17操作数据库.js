const mysql = require('mysql')
const db = mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'LIJINfei1837463',
    database:'lzz'
})
var sql = "select * from test1"
db.query(sql,(err,results)=>{
    if(err){
        console.log(err.message)
        return 0
    }else{
        console.log("查询成功")
        console.log(results)
        return 1
    }

})
// const user = {name:'llj',password:'djjsdf'}
// sql = "insert into test1(name,password) values (?,?)"
// db.query(sql,[user.user,user.password],(err,results)=>{
//     if(err){
//         console.log(err.message)
//     }else{
//         console.log(results)
//         if(results.affectedRows==1){
//             console.log("插入成功")
//         }
//         return 1
//     }
// })
//快捷插入
// const user = {name:'llj',password:'djjsdf'}
// sql = "insert into test1 set ?"
// db.query(sql,user,(err,results)=>{
//     if(err){
//         console.log(err.message)
//         return
//     }
//     if(results.affectedRows==1){
//         console.log("快捷插入数据成功")
//     }
// })
//修改
// const user = {name:'fff',password:'djjsdf',id:1}
// sql = "update test1 set ? where id=?"
// db.query(sql,[user,user.id],(err,results)=>{
//     if(err){
//         console.log(err.message)
//     }
//     console.log(results)
// })

//删除
sql = "delete from test1 where id=?"
db.query(sql,2,(err,results)=>{
    if(err){
        console.log(err.message)
    }
    console.log(results)
})

//标记删除 给了个status语句来update内容
