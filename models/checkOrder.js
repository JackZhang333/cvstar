const db = require('../db')
module.exports = db.defineModel('checkOrder',{
    userId:db.STRING(50),
    orderCode: db.STRING(50),
    orderTime: db.STRING(50),
})