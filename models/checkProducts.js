const db = require('../db')
module.exports = db.defineModel('checkProducts', {
    orderCode: db.STRING(50),
    pic: db.STRING(50),
    name: db.STRING(50),
    spec: db.STRING(50),
    barCode: db.STRING(50),
    count: db.BIGINT,
    price: db.FLOAT,
    pPrice: db.FLOAT,
    totalPrice: db.FLOAT,
})