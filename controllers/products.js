const products = require('../services/products')
const fs = require('fs')
const path = require('path')
const getProducts = async (ctx, next) => {
    const {userId} = ctx.request.query
    const data = await products.getProducts(userId)
    // console.log(data,typeof(data))
    ctx.rest(data)
    await next()
}
//新增商品
const rpath = path.resolve('.')

const uploadProduct = function (ctx, data) {
    let storePic = function (imgData) {
        //过滤掉data:url
        const base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
        //转换为buffer
        const dataBuffer = new Buffer(base64Data, 'base64')
        //拼接图片地址
        //储存到服务器并，把地址写到数据库
        fs.writeFile(imgPath, dataBuffer, (err) => {
            if (err) {
                ctx.rest({ code: -1, msg: '图片储存失败' })
            } else {
                ctx.rest({ code: 1, msg: '图片上传成功',picPath })
            }
        })
    }
    const picName = data.barCode
    const imgPath = rpath + '/public/' + picName + '.jpeg'
    //把假的图片地址存到数据库，生产环境需要把图片上传到文件服务器，在返回地址给数据库
    const picPath = 'http://localhost:3000/public/' + picName + '.jpeg'

    //接受传递过来的base64字符串
    const imgData = data.pic
    //如果不是base64说明没有编辑图片，所以pic的值还是地址
    if (imgData != picPath) {
        //如果不等于拼接的路径说明是初次上传或者已经编辑过图片，那么就要存在服务器上
        storePic(imgData)
    }
    return { ...data, pic: picPath }
}
const addProduct = async (ctx, next) => {
    const data = ctx.request.body
    const databaseData = uploadProduct(ctx, data)
    await products.addProduct(databaseData)

    await next()
}
//删除商品
const removeProduct = async (ctx, next) => {
    let { id } = ctx.request.body
    await products.removeProduct(id)
    ctx.rest({ code: 1, msg: '商品删除成功' })
    await next()
}
//更新商品
const updateProduct = async (ctx, next) => {
    let data = ctx.request.body
    const databaseData = uploadProduct(ctx, data)
    await products.updateProduct(databaseData)
    ctx.rest({ code: 1, msg: '更新商品数据成功' })
    await next()
}
module.exports = {
    'GET /api/products': getProducts,
    'POST /api/addProduct': addProduct,
    'POST /api/removeProduct': removeProduct,
    'POST /api/updateProduct': updateProduct,
}