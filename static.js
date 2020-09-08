let fs = require('mz/fs')
let mime = require('mime')

module.exports = async(ctx,next)=>{
    let url = ctx.request.path
    
    if(url.startsWith('/public')){
        // console.log('请求的静态资源：'+url)
        let fPath = __dirname+url
        if(fs.exists(fPath)){
        ctx.response.type = mime.getType(fPath)
        ctx.response.body = await fs.readFile(fPath)
        }
        
    }else{
        await next()
    }
}
