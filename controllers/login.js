const bcrypt = require('bcryptjs')
const User = require('../services/users')

const toLogin = async (ctx, next) => {
    let { request, response } = ctx
    //从客户端拿到数据
    let { name, password } = request.query
    console.log(request.query)
    let data = {}
    //校验数据并返回不同的结果
    const userInfos= await User.getUser(name)
    let isRight = false
    if(userInfos){
         isRight = bcrypt.compareSync(password,userInfos.password)
    }
   
    if (isRight) {
    
        data = {
            code: 200,
            msg: '恭喜你，登录成功！',
            token:userInfos.id,
            userInfos:userInfos

        }
    } else {
        data = {
            code: -1,
            msg: '用户名或密码错误'
        }
    }
    ctx.rest(data)
    await next()
}
module.exports = {
    'GET /api/login':toLogin
}