const CloudProduct = require('../services/cloudProducts')
//新增云商品(管理系统/小程序)
const addCloudProduct = async(ctx,next)=>{
    const product = ctx.request.body
    await CloudProduct.addCloudProduct(product)
    ctx.rest({code:1,msg:'新增商品成功'})

    await next()
}
//删除云商品
const removeCloudProduct = async(ctx,next)=>{
    const {id} = ctx.request.body
    await CloudProduct.removeCloudProduct(id)
    ctx.rest({code:1,msg:'成功删除商品'})

    await next()
}

//编辑云商品
const editCloudProduct = async(ctx,next)=>{
    const product = ctx.request.body
    await CloudProduct.editCloudProduct(product)
    ctx.rest({code:1,msg:'商品信息已保存'})

    await next()
}
//查找一个商品（客户端）
const getCloudProduct = async(ctx,next)=>{
    const {barCode} = ctx.request.body
    let result = await CloudProduct.getCloudProduct(barCode)
    if(result){
        ctx.rest({
            code:1,
            msg:'找到了一个匹配的商品',
            product:result
        })
    }else {
        ctx.rest({
            code:0,
            msg:'没有找到匹配的商品'
        })
    }
    await next()
}
//查找所有云商品（管理系统）
const getAllCloudProducts = async(ctx,next)=>{
    const products = await CloudProduct.getAllCloudProducts()
    if(products){
        ctx.rest({code:1,msg:'成功获取数据',products})
    }else {
        ctx.rest({code:0,msg:'获取数据失败'})
    }
     await next()
}
module.exports = {
    'POST /api/addCloudProduct':addCloudProduct,
    'POST /api/removeCloudProduct':removeCloudProduct,
    'POST /api/editCloudProduct':editCloudProduct,
    'POST /api/getCloudProduct':getCloudProduct,
    'GET /api/getAllCloudProducts':getAllCloudProducts,
}