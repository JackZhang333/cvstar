const Staff = require('../services/staff')

const getAllStaff = async(ctx,next)=>{
    let result = await Staff.getStaffs()
    ctx.rest(result)
    await next()
}

module.exports = {
    'GET /api/getAllStaff':getAllStaff
}