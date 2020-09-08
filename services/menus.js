// let menus = ['水和饮料','牛奶乳品','膨化食品','休闲小食','米面粮油','方便速食','厨房调味','个人清洁','日杂百货','其他分类']
const {menus:Menu} = require('../model')

module.exports.getMenus = async(userId)=>{
    return await Menu.findAll({
        order:[['createdAt','DESC']],
        where:{
            userId:userId
        }
    })
}
module.exports.addMenu = async(menu)=>{
    const p = await Menu.create(menu)
    // console.log('新增了一天菜单数据：' + p)
    
}
module.exports.removeMenu = async(name)=>{
    const m = await Menu.destroy({
        where:{
            name:name
        }
    })
    console.log('删除的菜单'+m)
}   

