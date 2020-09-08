const db = require('../db')
module.exports = db.defineModel('users',{
    userName:db.STRING,
    password:db.STRING,
    storeName:db.STRING,
    status:{type:db.BOOLEAN,defaultValue:true}
})