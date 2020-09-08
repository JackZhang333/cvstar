let Sequelize = require('sequelize')
let uuid = require('uuid')

function generateId(){
    return uuid.v4()
}

let {database,username,password,host,port}= require('./configs')
let seq = new Sequelize(database,username,password,{
    host:host,
    dialect:'mysql',
    pool:{
        max:5,
        min:0,
        idel:1000
    }
})
seq.authenticate().then(()=>console.log('链接成功')).catch(e=>console.log(e))
let defineModel = function(name,attrs){
    let attributes = {}
    for(let key in attrs){
        // console.log('正在定义数据表属性：'+key)
        let value = attrs[key]
        if(typeof value ==='object'&&value['type']){
            value.allowNull = value.allowNull||false
            attributes[key]=value
        }else{
            attributes[key]={
                type:value,
                allowNull:false
            }
        }
    }
    attributes.id = {
        type:Sequelize.STRING(50),
        primaryKey:true
    }
    attributes.createdAt = {
        type:Sequelize.BIGINT,
        allowNull:false
    }
    attributes.updateAt = {
        type:Sequelize.BIGINT,
        allowNull:false
    }
    attributes.version = {
        type:Sequelize.BIGINT
    }
    let now = Date.now()
    return seq.define(name,attributes,{
        timestamps:false,
        hooks:{
            beforeValidate:(obj)=>{
                if(obj.isNewRecord){
                    obj.id = generateId()
                    obj.createdAt = now
                    obj.updateAt = now
                    obj.version = 0
                }else{
                    obj.updateAt = now
                    obj.version++
                }
            }
        }
    })
}

let sync = function(){
    seq.sync()
}
const TYPES = ['STRING', 'BIGINT', 'BOOLEAN','FLOAT']
let types={}
for (let t of TYPES) {
    types[t] = Sequelize[t]
}
module.exports = {
    defineModel:defineModel,
    sync:sync,
    ...types
}