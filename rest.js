module.exports = (preFix)=>{
    let rpath = preFix || '/api/'
    return async (ctx,next)=>{
        if(ctx.request.path.startsWith(rpath)){
            ctx.rest = (data)=>{
            ctx.response.type = 'application/json'
            ctx.response.body = data
        }
            await next()
        }else {
            await next()
        }
        
    }
}
