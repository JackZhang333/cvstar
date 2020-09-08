const {checkOrder,checkProducts} = require('../model')

module.exports.getCheckOrders = async(userId)=>{
    const orders = await checkOrder.findAll(
        {
            order:[['orderCode','DESC']],
            where:{
            userId
        }}
    )
    //需要用到promise.all返回一个真正的数组，而不是promise数数组
    const result = await Promise.all(orders.map(async(v)=>{
        //需要取dataValues，而不能是 v,原因不明
        const {orderCode} = v.dataValues
        let products = await checkProducts.findAll({
            where:{
                orderCode:orderCode
            }
        })
        // console.log(products)
        return {...v.dataValues,products}
    }))
    // console.log(result)
    return result
}
module.exports.addCheckOrder = async(data)=>{
    //分别存储数据到两张表
    const {orderCode,orderTime,userId} = data
    const {products} = data
    await checkOrder.create({orderCode,orderTime,userId})
    products.forEach(async(v)=>{
        //注意写入数据库的字段不包含其他字段（stock,type），需要解构
        let {pic,name,spec,barCode,count,price,pPrice,totalPrice} = v
        await checkProducts.create({pic,name,spec,barCode,count,pPrice,price,totalPrice,orderCode})
    })

}