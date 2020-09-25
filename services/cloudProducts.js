const {cloudProducts} = require('../model')

//新增云商品
module.exports.addCloudProduct = async(product)=>{
    await cloudProducts.create(product)
    console.log('新增了一个云商品:'+product.productName)
}

//删除一个云商品
module.exports.removeCloudProduct = async(id)=>{
    await cloudProducts.destroy({
        where:{
            id
        }
    })
    console.log('删除了一个云商品')
}
//编辑一个云商品
module.exports.editCloudProduct = async(product)=>{
  let {pic,productName,spec,barCode,sPrice,categary,pPrice} =product
    await cloudProducts.update({pic,productName,spec,barCode,sPrice,categary,pPrice},{
        where:{
            id:product.id
        }
    })
}
//查找一个云商品
module.exports.getCloudProduct = async(barCode)=>{
    let result = await cloudProducts.findOne({
        where:{
            barCode
        }
    })
    return result
}
//查找所有的云商品
module.exports.getAllCloudProducts = async()=>{
    let products = await cloudProducts.findAll({
      order:[['createdAt','DESC']],
    })
    return products
}