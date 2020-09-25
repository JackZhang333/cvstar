const {staff} = require('../model')

module.exports.getStaff = async(phone)=>{
    return await staff.findOne({
        where:{
            phone:phone
        }
    })
}
module.exports.addStaff = async (data) =>{
    return await staff.create(data)
}
//得到所有管理员
module.exports.getStaffs = async()=>{
    return await staff.findAll({
      order:[['createdAt','DESC']],
    })
}