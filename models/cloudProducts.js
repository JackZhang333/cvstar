let db = require('../db')
module.exports = db.defineModel('product', {
    pic: db.STRING(100),
    productName: db.STRING(100),
    spec: db.STRING(100),
    barCode: db.STRING(100),
    sPrice: db.FLOAT,
    categary: db.STRING(100),
    pPrice: db.FLOAT,
})