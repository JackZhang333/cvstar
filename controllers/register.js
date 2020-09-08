const User = require('../services/users')
const bcrypt = require('bcrypt')

const register = async(ctx,next)=>{
    const data = ctx.request.body
    const storedPwd = await bcrypt.hash(data.password,10)
    let result = await User.register({...data,password:storedPwd})
    if(!result){
        ctx.rest({code:-1,msg:'该用户已经被注册了，请登录'})
    }else{
        ctx.rest({code:1,msg:'注册成功'})
    }
    await next()
}

module.exports = {
    'POST /api/register':register
}