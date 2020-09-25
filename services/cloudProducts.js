const {cloudProduct} = require('../model')

//新增云商品
module.exports.addCloudProduct = async(product)=>{
    await cloudProduct.create(product)
    console.log('新增了一个云商品:'+product.productName)
}

//删除一个云商品
module.exports.removeCloudProduct = async(id)=>{
    await cloudProduct.destroy({
        where:{
            id
        }
    })
    console.log('删除了一个云商品')
}
//编辑一个云商品
module.exports.editCloudProduct = async(product)=>{
  let {pic,productName,spec,barCode,sPrice,categary,pPrice} =product
    await cloudProduct.update({pic,productName,spec,barCode,sPrice,categary,pPrice},{
        where:{
            id:product.id
        }
    })
}
//查找一个云商品
module.exports.getCloudProduct = async(barCode)=>{
    let result = await cloudProduct.findOne({
        where:{
            barCode
        }
    })
    return result
}
//查找所有的云商品
module.exports.getAllCloudProducts = async()=>{
    let products = await cloudProduct.findAll({
      order:[['createdAt','DESC']],
    })
    return products
}