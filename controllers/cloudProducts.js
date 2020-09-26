const path = require('path')
const env = require('../env')
const fs = require('fs')

const CloudProduct = require('../services/cloudProducts')
const rpath = path.resolve('.')


//新增云商品(管理系统/小程序)
const addCloudProduct = async (ctx, next) => {
    const product = ctx.request.body
    await CloudProduct.addCloudProduct(product)
    ctx.rest({ code: 1, msg: '新增商品成功' })

    await next()
}
//删除云商品
const removeCloudProduct = async (ctx, next) => {
    const { id } = ctx.request.body
    // console.log('要删除的商品id,controller',id,ctx.request.body)
    await CloudProduct.removeCloudProduct(id)
    ctx.rest({ code: 1, msg: '成功删除商品' })

    await next()
}

//编辑云商品
const editCloudProduct = async (ctx, next) => {
    const product = ctx.request.body
    await CloudProduct.editCloudProduct(product)
    ctx.rest({ code: 1, msg: '商品信息已保存' })

    await next()
}
//查找一个商品（客户端）
const getCloudProduct = async (ctx, next) => {

    const { barCode } = ctx.request.body
    console.log('接受到来自请求的数据：',barCode)
    if (barCode) {
        let result = await CloudProduct.getCloudProduct(barCode)
        if (result) {
            ctx.rest({
                code: 1,
                msg: '找到了一个匹配的商品',
                product: result
            })
        } else {
            ctx.rest({
                code: 0,
                msg: '没有找到匹配的商品'
            })
        }
    }else {
        ctx.rest({
            code: 0,
            msg: '未接受到请求的值'
        })
    }

    await next()
}
//查找所有云商品（管理系统）
const getAllCloudProducts = async (ctx, next) => {
    const products = await CloudProduct.getAllCloudProducts()
    if (products) {
        ctx.rest({ code: 1, msg: '成功获取数据', products })
    } else {
        ctx.rest({ code: 0, msg: '获取数据失败' })
    }
    await next()
}
//新增一个接口，用于上传云商品的图片
const uploadPic = async (ctx, next) => {
    const { pic, id } = ctx.request.body
    ctx.response.status = 200
    // console.log('上传过来的图片内容：',pic)

    //把图片存到本地并返回地址给客户端
    const picName = id
    const imgPath = rpath + '/public/' + picName + '.jpeg'
    //把假的图片地址存到数据库，生产环境需要把图片上传到文件服务器，在返回地址给数据库
    const picPath = env + picName + '.jpeg'

    let storePic = function (imgData) {
        //过滤掉data:url
        const base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
        //转换为buffer
        const dataBuffer = new Buffer.alloc(50000, base64Data, 'base64')
        //拼接图片地址
        //储存到服务器并，把地址写到数据库
        fs.writeFile(imgPath, dataBuffer, (err) => {
            if (err) {
                // ctx.rest({ code: -1, msg: '图片储存失败' })
                console.log('图片储存失败')
            } else {
                //需要返回整个服务器存储的数据而不仅仅是图片
                // ctx.rest({ code: 1, msg: '图片上传成功',picPath })
                console.log('图片上传成功')
            }
        })
    }
    storePic(pic)
    ctx.rest({ pic: picPath })

    await next()

}
module.exports = {
    'POST /api/addCloudProduct': addCloudProduct,
    'POST /api/removeCloudProduct': removeCloudProduct,
    'POST /api/editCloudProduct': editCloudProduct,
    'POST /api/getCloudProduct': getCloudProduct,
    'GET /api/getAllCloudProducts': getAllCloudProducts,
    'POST /api/uploadPic': uploadPic,
}