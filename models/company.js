const db = require('../db')
module.exports = db.defineModel('company',{
    userId:db.STRING(50),
    name:db.STRING(100),
    phone:db.STRING(50),
})