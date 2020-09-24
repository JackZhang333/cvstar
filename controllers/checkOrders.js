const checkOrders = require('../services/checkOrders')
const Product = require('../services/products')
const User = require('../services/users')

//获取所有的用户订单（管理系统）
const getAllCheckOrders = async(ctx,next) => {
    let users = await User.getUsers()
    let allOrders = await Promise.all(users.map(async(item)=>{
        return await checkOrders.getCheckOrders(item.id,item.userName)
    }))
    ctx.rest(allOrders)
    await next()
}

const getOrders = async(ctx,next)=>{
    let {userId} = ctx.request.query
    let result = await checkOrders.getCheckOrders(userId)
    ctx.rest(result)
    await next()
}
const addOrder = async(ctx,next)=>{
    let order = ctx.request.body
    await checkOrders.addCheckOrder(order)
    //减去商品库存
    let {products} = order
    products.forEach(async(v)=>{
        let {id,stock,count} = v
        
        let number = stock -count
        // console.log('需要修改的库存:'+id,'数量：'+number,stock,count)
        await Product.updateStock(id,number)
    })
    ctx.rest({code:1,msg:'新增一条收银记录'})
    await next()
}

module.exports = {
    'GET /api/checkOrders':getOrders,
    'POST /api/addOrder':addOrder,
    'GET /api/getAllCheckOrders':getAllCheckOrders,
}