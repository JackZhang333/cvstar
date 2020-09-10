const Company = require('../services/companies')

const getCompanies = async (ctx,next)=>{
    const {userId} = ctx.request.query
    // console.log('获取的用户id',userId)
    const companies = await Company.getCompanies(userId)
    ctx.rest(companies)
    await next()
}
const addCompany = async(ctx,next)=>{
    let data = ctx.request.body
    //拿到数据库中的对象
    const backData = await Company.addCompany(data)
    ctx.rest({code:1,msg:'新增供应商成功',backData})
    await next()
}
const removeCompay = async(ctx,next)=>{
    let {id} = ctx.request.body
    await Company.removeCompany(id)
    ctx.rest({code:1,msg:'删除供应商成功'})
    await next()
}
module.exports = {
    'GET /api/companies':getCompanies,
    'POST /api/addCompany':addCompany,
    'POST /api/removeCompany':removeCompay,
}