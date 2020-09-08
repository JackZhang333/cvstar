let fs = require('fs')
let db = require('./db')

let files = fs.readdirSync(__dirname+'/models')
let jFiles = files.filter(f=>f.endsWith('.js'))

for(let f of jFiles){
    let key = f.substring(0,f.length - 3)
    let value = require('./models/'+f)
    module.exports[key] = value
}
module.exports.sync = db.sync