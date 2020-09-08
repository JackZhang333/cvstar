const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
var app = new Koa()

const static  = require('./static')
const rest = require('./rest')
const routes = require('./controller')
// 设置一个请求预处理中间件
app.use(async(ctx,next)=>{
    let {request,response} = ctx
    
    if(/^\/api/.test(request.path)){
        if(request.path == '/api/login/'||request.path == '/api/register'||request.header.token){
            // console.log(request.path)
            await next()
        }else {
            response.status = 401
        }
    }else if(/^\/public/.test(request.path)){
        // console.log('请求静态资源：',request.path)
        await next()
    }else {
        response.status = 404
        response.body = '你访问的资源不存在'
    }
})
app.use(static)
app.use(bodyParser())
app.use(rest('/api/'))
app.use(routes)
app.listen(3000)

console.log('server is on')
