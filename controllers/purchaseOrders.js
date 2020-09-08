const purchaseOrders = require('../services/purchaseOrders')
const Product = require('../services/products')

const getAllPurchase = async (ctx,next)=>{
    const {userId} = ctx.request.query
    const data = await purchaseOrders.getPurchaseOrders(userId)
    ctx.rest(data)
    await next()
}
const addOrder = async(ctx,next)=>{
    const data = ctx.request.body
    await purchaseOrders.addPurchaseOrder(data)
    //新家进货单时，增加包含商品的库存
    let {products} = data
    products.forEach(async(v)=>{
        let {id,stock,count} = v
        let number = Number(stock)+Number(count)
        await Product.updateStock(id,number)
    })
    ctx.rest({code:1,msg:'新增一条进货记录'})
    await next()
}

module.exports = {
    'GET /api/purchaseOrders':getAllPurchase,
    'POST /api/addPurchaseOrder':addOrder,
}