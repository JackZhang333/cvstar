const {user} = require('../model')

//改变用户的状态
module.exports.modifyUserStatus = async({userName,status})=>{
    await user.update({status},{
        where:{
            userName
        }
    })
    console.log('修改用户状态成功！')
}
//获取所有的用户数据
module.exports.getUsers = async ()=>{
    const users = await user.findAll({
      order:[['createdAt','DESC']],
    })
    return users
  }
module.exports.register = async(data)=>{
    //检测是否已经注册过了
    const hasOne = await user.findOne({
        where:{
            userName:data.userName
        }
    })
    if(hasOne){
        return false
    }else {
        return await user.create(data)
    }
    
}
module.exports.getUser = async(name)=>{
    return await user.findOne({
        where:{
            userName:name
        }
    })
}
module.exports.editStoreName = async({userName,storeName})=>{
    await user.update({storeName:storeName},{
        where:{
            userName:userName
        }
    })
    console.log('修改点名成功')
}

module.exports.editPassword = async({userName,newPassword})=>{
    await user.update({password:newPassword},{
        where:{
            userName:userName
        }
    })
    console.log('修改密码成功')
}