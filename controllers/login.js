const bcrypt = require('bcryptjs')
const User = require('../services/users')
const Staff = require('../services/staff')

//管理员登录
const staffLogin = async(ctx,next)=>{
    let { request,response } = ctx
    let {phone,password,verifyImage} = request.body
    let data = {}
    let imageVerified
    if(ctx.session.imageCode){
        console.log('session里的验证码:'+ctx.session.imageCode,'接受到的验证码：'+verifyImage)
        imageVerified= ctx.session.imageCode == verifyImage.toLocaleUpperCase()
    }else {
        imageVerified =true
    }
    const staffInfos = await Staff.getStaff(phone)
    let isRight = false
    if(staffInfos){
        isRight = staffInfos.password == password
    }
    if (isRight && imageVerified) {

        data = {
            code: 200,
            msg: '恭喜你，登录成功！',
            token: staffInfos.id,
            staffInfos: staffInfos

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
//普通用户登录
const toLogin = async (ctx, next) => {
    let { request, response } = ctx
    //从客户端拿到数据
    let { name, password, verifyImage } = request.query
    // console.log(name, password, verifyImage)
    // console.log(request.query)
    let data = {}
    let  imageVerified
    //从session中拿到之前穿过去的imageCode,与verifyImage对比
    if(ctx.session.imageCode){
        //云端不知为什么取不到imageCode
        imageVerified= ctx.session.imageCode == verifyImage.toLocaleUpperCase()
    }else {
        imageVerified =true
    }
    
    //尝试使用cookies的方式
    // const imageVerified = ctx.cookies.get('imageCode') == verifyImage.toLocaleUpperCase()
    // console.log('从客户端读到的cookies:',ctx.cookies)
    //校验数据并返回不同的结果
    const userInfos = await User.getUser(name)
    let isRight = false
    let status = false
    if (userInfos) {
        isRight = bcrypt.compareSync(password, userInfos.password)
        //校验用户当前的可用状态
        status = userInfos.status;
    }

    if (isRight && status && imageVerified) {

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
    } else if (!status){
        data = {
            code: -1,
            msg: '您的账户已被停用，请联系管理员！'
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
    console.log('存到session里的值:'+captcha.text.toLocaleUpperCase() )
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
    'POST /api/staffLogin': staffLogin,
}
