let db = require('../db')
module.exports = db.defineModel('product', {
    userId:db.STRING(50),
    type: db.STRING(100),
    pic: db.STRING(100),
    name: db.STRING(100),
    spec: db.STRING(100),
    barCode: db.STRING(100),
    price: db.STRING(100),
    categary: db.STRING(100),
    pPrice: db.FLOAT,
    stock: db.BIGINT,
    quickAdd: db.BOOLEAN
})