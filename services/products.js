const {product} = require('../model')
//传入用户的id，获取用户的商品库
module.exports.getProducts = async (userId)=>{
  const products = await product.findAll({
    order:[['createdAt','DESC']],
    where:{
      userId
    }
  })
  return products
}
//增加一个商品
module.exports.addProduct = async (data)=>{
  return await product.create(data)
}
//删除商品信息
module.exports.removeProduct = async(id)=>{
  const p = await product.destroy({
    where:{
      id:id
    }
  })
  console.log('要删除的商品：'+p)
}
//数据库更新产品信息
module.exports.updateProduct = async(p)=>{
  let {type,pic,name,spec,barCode,price,categary,pPrice,stock,quickAdd} =p
  const res = await product.update({type,pic,name,spec,barCode,price,categary,pPrice,stock,quickAdd},{
    where:{
      id:p.id
    }
  })
  console.log('要更新的商品：'+res)
}
//完成商品库存的增加和减少逻辑，进货的时候加库存，收银结账的时候减库存
module.exports.updateStock = async(productId,number)=>{
  const res = await product.update({stock:number},{
    where:{
      id:productId
    }
  })
  // console.log('减去了一个商品库存：'+number)
}