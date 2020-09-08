const {purchaseOrder,purchaseProducts} = require('../model')

module.exports.getPurchaseOrders = async(userId)=>{
    const orders =await purchaseOrder.findAll({
        order:[['orderCode','DESC']],
        where:{
            userId
        }
    })
    const result = await Promise.all(
        orders.map(async(v)=>{
            let {orderCode} = v.dataValues
            let products = await purchaseProducts.findAll({

                where:{
                    orderCode:orderCode
                }
            })
            return {...v.dataValues,products}
        })
    )
    return result
}

module.exports.addPurchaseOrder = async(order)=>{
    const {userId,orderCode,companyName,orderTime,products} =order
    await purchaseOrder.create({userId,orderCode,orderTime,companyName})
    products.forEach(async(v)=>{
        //去掉用于减库存的id和stock字段，否则写入数据库时会因为字段不匹配而报错
        let {id,stock,...others} = v
        await purchaseProducts.create({...others,orderCode})
    })
}