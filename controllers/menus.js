const Menu = require('../services/menus')

const getMenus = async (ctx,next)=>{
    const {userId} = ctx.request.query
    const menus = await Menu.getMenus(userId)
    // console.log('查询到的菜单：'+menus)
    ctx.rest(menus)
    await next()
}
const addMenu = async(ctx,next)=>{
    let  menu = ctx.request.body
    // console.log('来自请求的值：'+menu)
    // ctx.response.status = 200
    await Menu.addMenu(menu)
    ctx.rest({code:1,msg:'新增菜单成功'})
    await next()
}
const removeMenu = async(ctx,next)=>{
    let {name} = ctx.request.body
    console.log(name)
    await Menu.removeMenu(name)
    ctx.rest({code:1,msg:'新增菜单成功'})
    await next()
}
module.exports = {
    'GET /api/menus':getMenus,
    'POST /api/removeMenu':removeMenu,
    'POST /api/addMenu':addMenu,
}