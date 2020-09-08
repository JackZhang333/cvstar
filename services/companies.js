const {company} = require('../model')
module.exports.getCompanies = async(userId)=>{
    return await company.findAll({
        order:[['createdAt','DESC']],
        where:{
            userId:userId
        }
    })
}
module.exports.addCompany = async(data)=>{
    const c= await company.create(data)
    console.log('新增供应商成功'+c)
}
module.exports.removeCompany = async(id)=>{
    const c = await company.destroy({
        where:{
            id:id
        }
    })
    console.log('删除供应商'+c)
}