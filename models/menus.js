const db = require('../db')
module.exports = db.defineModel('menus',{
    userId:db.STRING(50),
    name:db.STRING(100)
})