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