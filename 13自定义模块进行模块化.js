const express = require('express')
const app = express()

const qs = require('querystring')


const bodyParser = (req,res,next)=>{
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
}


module.exports = bodyParser