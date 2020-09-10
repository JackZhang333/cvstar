const User = require('../services/users')
const bcrypt = require('bcryptjs')

const register = async (ctx, next) => {
    const { verifyImage, ...others } = ctx.request.body

    //从session中拿到之前穿过去的imageCode,与verifyImage对比
    const imageVerified = ctx.session.imageCode == verifyImage.toLocaleUpperCase()


    if (imageVerified) {
        //如果验证码正确，接下来判断注册
        const storedPwd = await bcrypt.hash(others.password, 10)
        const result = await User.register({ ...others, password: storedPwd })

        if (!result) {
            ctx.rest({ code: -1, msg: '该用户已经被注册了，请登录' })
        } else {
            ctx.rest({ code: 1, msg: '注册成功' })
        }
    } else {
        ctx.rest({ code: -1, msg: '验证码输入错误' })
    }

    await next()
}

module.exports = {
    'POST /api/register': register
}