const User = require('../services/users')
const bcrypt = require('bcrypt')
const editStoreName = async (ctx, next) => {
    let data = ctx.request.body
    // console.log(data)
    await User.editStoreName(data)
    ctx.rest({ code: 1, msg: '修改店名成功' })
    await next()
}
const editPassword = async (ctx, next) => {
    //从客户端请求里取得数据
    let { userName, password, newPassword } = ctx.request.body
    // console.log('用户名：' + userName)
    let queriedUser = await User.getUser(userName)
    // console.log(queriedUser)
    if (queriedUser) {
        //校验密码是否正确
        let oldPassword = queriedUser.password
            // console.log(oldPassword, password)
        const isRight = bcrypt.compareSync(password,oldPassword)
        // console.log(isRight)
        if (isRight) {
            //把新密码加密后，再传入数据库
            newPassword = bcrypt.hashSync(newPassword, 10)
            await User.editPassword({ userName, newPassword })
            ctx.rest({ code: 1, msg: '修改密码成功' })
        } else {
            ctx.rest({ code: -1, msg: '原密码错误' })
        }
    }else{
        console.log('没有查到该到用户')
    }

    await next()

}
module.exports = {
    'POST /api/editStoreName': editStoreName,
    'POST /api/editPassword': editPassword,
}