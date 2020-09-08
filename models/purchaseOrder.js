const db = require('../db')
module.exports = db.defineModel('purchaseOrder',{
    userId:db.STRING(50),
    orderCode:db.STRING(50),
    companyName: db.STRING(100),
    orderTime: db.STRING(50),
})