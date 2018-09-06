const axios = require('axios')
const webpack = require('webpack')
const path = require('path')
const ejs = require('ejs')
const MemoryFs = require('memory-fs')
const ReactDomServer = require('react-dom/server')
const proxy = require('http-proxy-middleware')
const asyncBootstrap = require('react-async-bootstrapper').default
const serialize = require('serialize-javascript')

const serverConfig = require('../../build/webpack.config.server')

const getTemplate = ()=>{
  return new Promise((resolve, reject)=>{
    axios.get('http://localhost:8888/public/server.ejs')
    .then(res=>{
      resolve(res.data)
    })
    .catch(reject)
  })
}
//str转js模块
const Module = module.constructor

const mfs = new MemoryFs
let serverBundle, createStoreMap
const serverCompiler = webpack(serverConfig)
serverCompiler.outputFileSystem = mfs
serverCompiler.watch({}, (err, stats)=>{
  if(err) throw err
  stats = stats.toJson()
  stats.errors.forEach(err => console.error(err))
  stats.warnings.forEach(warn => console.warn(warn))

  const bundlePath = path.join(
    serverConfig.output.path,
    serverConfig.output.filename
  )
  const bundle = mfs.readFileSync(bundlePath,'utf8')
  const m = new Module()
  m._compile(bundle, 'server-entry.js')
  serverBundle = m.exports.default
  createStoreMap = m.exports.createStoreMap
})

const getStoreState = (stores) => {
  return Object.keys(stores).reduce((result, storeName) => {
    result[storeName] = stores[storeName].toJson()
    return result
  }, {})
}

module.exports = function(app){
  app.use('/public', proxy({
    target: 'http://localhost:8888'
  }))

  app.get('*', function(req, res){
    getTemplate().then(template => {

      const routerContext = {}
      const stores = createStoreMap()
      const app = serverBundle(stores, routerContext, req.url)

      asyncBootstrap(app).then(() => {
        //服务端渲染解决Redirect路由跳转
        if(routerContext.url){
          res.status(302).setHeader('Location', routerContext.url)
          res.end()
          return
        }
        const state = getStoreState(stores)

        const content = ReactDomServer.renderToString(app)
        // res.send(template.replace('<!--app-->', content))
        const html = ejs.render(template, {
          appString: content,
          initialState: serialize(state)
        })
        res.send(html)

      })
      
      
    })
  })
}