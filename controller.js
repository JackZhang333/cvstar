const router = require('koa-router')()

const fs = require('fs')
const path = require('path')
const rpath = path.resolve('.')

const files = fs.readdirSync(rpath+'/controllers').filter(f=>f.endsWith('.js'))

// console.log(files)

files.forEach(file=>{
    let apis = require(rpath+'/controllers/'+file)
    for (let key in apis){
        // console.log(key,apis[key])
        if(key.startsWith('GET')){
            router.get(key.slice(4),apis[key])
        }else if(key.startsWith('POST')){
            // console.log(key.slice(5),apis[key])
            router.post(key.slice(5),apis[key])
        }
    }
})
// router.post('/api/addMenu',async(ctx,next)=>{
//     console.log(ctx.request.path)
//     console.log(ctx.request.body)
//     ctx.response.status = 200
//     ctx.rest({
//         code:1,
//         msg:'你好呀'
//     })
//     await next()
// })
module.exports = router.routes()