const bcrypt = require('bcryptjs')
const User = require('../services/users')

const toLogin = async (ctx, next) => {
    let { request, response } = ctx
    //从客户端拿到数据
    let { name, password, verifyImage } = request.query
    // console.log(name, password, verifyImage)
    // console.log(request.query)
    let data = {}
    //从session中拿到之前穿过去的imageCode,与verifyImage对比
    if(ctx.session.imageCode){
        let  imageVerified = ctx.session.imageCode == verifyImage.toLocaleUpperCase()
    }else {
        imageVerified =true
    }
    
    //尝试使用cookies的方式
    // const imageVerified = ctx.cookies.get('imageCode') == verifyImage.toLocaleUpperCase()
    //校验数据并返回不同的结果
    const userInfos = await User.getUser(name)
    let isRight = false
    if (userInfos) {
        isRight = bcrypt.compareSync(password, userInfos.password)
    }

    if (isRight && imageVerified) {

        data = {
            code: 200,
            msg: '恭喜你，登录成功！',
            token: userInfos.id,
            userInfos: userInfos

        }
    } else if (!imageVerified) {
        data = {
            code: -1,
            msg: '图片验证码错误'
        }
    } else if (!isRight) {
        data = {
            code: -1,
            msg: '用户名或密码错误'
        }
    }
    ctx.rest(data)
    await next()
}
//新增一个接口给图片验证码使用
const svgCaptcha = require('svg-captcha')

const toVerifyImage = async (ctx, next) => {
    //生产对象
    const captcha = svgCaptcha.create({
        size: 4,
        noise: 3,
        background: '#108cee',
        width: 120,
        height: 40,
        fontSize: 50,
    })
    //拿到文本值存入session
    ctx.session.imageCode = captcha.text.toLocaleUpperCase()
    //尝试使用cookies的方式
    // ctx.cookies.set('imageCode',captcha.text.toLocaleUpperCase(),{httpOnly:true})
    //把svg格式的数据返回给客户端
    ctx.response.type = "image/svg+xml"
    ctx.response.body = captcha.data

    await next()

}
module.exports = {

    'GET /api/login': toLogin,
    'GET /api/login/verify_image':toVerifyImage,
}
