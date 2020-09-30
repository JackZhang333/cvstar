const {cloudProducts} = require('../model')

//新增云商品
module.exports.addCloudProduct = async(product)=>{
    await cloudProducts.create(product)
    console.log('新增了一个云商品:'+product.productName)
}

//删除一个云商品
module.exports.removeCloudProduct = async(id)=>{
    // console.log('要删除的商品id',id)
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
            barCode
        }
    })
    // console.log('编辑成功了一个云商品：',product)
}
//查找一个云商品
module.exports.getCloudProduct = async(barCode)=>{
    // console.log(barCode)
    let result = await cloudProducts.findOne({
        where:{
            barCode
        }
    })
    return result
}
//查找所有的云商品
module.exports.getAllCloudProducts = async(offSet,limit)=>{
    // console.log('请求查询数据的偏移：'+offSet)
    let products = await cloudProducts.findAndCountAll({
      order:[['createdAt','DESC']],
      'limit':limit,
      'offset':offSet
    })
    return products
}