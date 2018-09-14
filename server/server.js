const express = require('express')
const serverRender = require('./utils/server-render')
const fs = require('fs')
const path = require('path')

const isDev = process.env.NODE_ENV === 'development'

const app = express()

if(!isDev){
    const serverEntry = require('../dist/server-entry')
    const template = fs.readFileSync(path.join(__dirname, '../dist/server.ejs'),'utf8')
    app.use('/public', express.static(path.join(__dirname, '../dist')))
    app.get('*', function(req, res, next){
        serverRender(serverEntry, template, req, res).catch(next)
    })
}else{
    const devStatic = require('./utils/dev-static')
    devStatic(app)
}

app.use(function (error, req, res, next) {
    console.log(error)
    res.status(500).send(error)
})

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  
    if (req.method == 'OPTIONS') {
      res.send(200); /*让options请求快速返回*/
    } else {
      next();
    }
  })

app.listen(3000, function(){
    console.log('server is listening on 3000')
})