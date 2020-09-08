let companies = [
    {   userId:"13d60d26-47b5-4232-8955-772ce56f0f9f",
        name:'杭州冰宇贸易有限公司',
        phone:'18700441020'
    },
    {
        userId:"13d60d26-47b5-4232-8955-772ce56f0f9f",
        name:'百世店加科技有限公司',
        phone:'13223948573'
    },
    {
        userId:"13d60d26-47b5-4232-8955-772ce56f0f9f",
        name:'杭州哗啦哗啦母婴用品有限公司',
        phone:'15958047892'
    },
]

const Company = require('../services/companies')
companies.forEach(v=>Company.addCompany(v))