const db = require('../db')
module.exports = db.defineModel('staff',{
    phone:db.STRING(20),
    name:db.STRING(50),
    password:db.STRING(50),
    role:db.STRING(50),
    status:{type:db.BOOLEAN,defaultValue:true}
})