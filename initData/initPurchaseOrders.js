const coffee = '/img/coffee.fe1c421f.png'
const tea = '/img/tea.59807f4a.png'
const defaultPic = '/img/product-default.3950e606.png'

let purchaseOrders = [
    {   userId:"13d60d26-47b5-4232-8955-772ce56f0f9f",
        orderCode: '20200918981',
        companyName: '杭州冰宇贸易有限公司',
        orderTime: '2020-06-23 12:56',
        products: [
            {
                pic: coffee,
                name: "雀巢咖啡1+2特浓",
                spec: "16包/盒",
                barCode: "93893829121",
                count:12,
                price:7.50,
                totalPrice:450.00
            },
            {
                pic: tea,
                name: "雀巢咖啡1+2特浓",
                spec: "16包/盒",
                barCode: "93893829121",
                count:10,
                price:7.50,
                totalPrice:150.00
            },
            {
                pic: defaultPic,
                name: "雀巢咖啡1+2特浓",
                spec: "16包/盒",
                barCode: "93893829121",
                count:12,
                price:7.50,
                totalPrice:150.00
            },
        ]
    },
    {
        userId:"13d60d26-47b5-4232-8955-772ce56f0f9f",
        orderCode: '20200918982',
        companyName: '杭州冰宇贸易有限公司',
        orderTime: '2020-07-23 12:56',
        products: [
            {
                pic: coffee,
                name: "雀巢咖啡1+2特浓",
                spec: "16包/盒",
                barCode: "93893829121",
                count:12,
                price:7.50,
                totalPrice:150.00
            },
            {
                pic: tea,
                name: "雀巢咖啡1+2特浓",
                spec: "16包/盒",
                barCode: "93893829121",
                count:2,
                price:7.50,
                totalPrice:160.00
            },
            {
                pic: defaultPic,
                name: "雀巢咖啡1+2特浓",
                spec: "16包/盒",
                barCode: "93893829121",
                count:12,
                price:7.50,
                totalPrice:150.00
            },
        ]
    },
    {
        userId:"13d60d26-47b5-4232-8955-772ce56f0f9f",
        orderCode: '20200918983',
        companyName: '杭州哗啦哗啦母婴用品有限公司',
        orderTime: '2020-05-23 12:56',
        products: [
            {
                pic: coffee,
                name: "雀巢咖啡1+2特浓",
                spec: "16包/盒",
                barCode: "93893829121",
                count:12,
                price:7.50,
                totalPrice:150.00
            },
            {
                pic: tea,
                name: "雀巢咖啡1+2特浓",
                spec: "16包/盒",
                barCode: "93893829121",
                count:67,
                price:7.50,
                totalPrice:150.00
            },
            
        ]
    },
    {
        userId:"13d60d26-47b5-4232-8955-772ce56f0f9f",
        orderCode: '20200918981',
        companyName: '其他供应商',
        orderTime: '2020-06-23 12:56',
        products: [
            {
                pic: coffee,
                name: "雀巢咖啡1+2特浓",
                spec: "16包/盒",
                barCode: "93893829121",
                count:7,
                price:7.50,
                totalPrice:150.00
            },
            {
                pic: tea,
                name: "雀巢咖啡1+2特浓",
                spec: "16包/盒",
                barCode: "93893829121",
                count:6,
                price:7.50,
                totalPrice:150.00
            },
            {
                pic: defaultPic,
                name: "雀巢咖啡1+2特浓",
                spec: "16包/盒",
                barCode: "93893829121",
                count:9,
                price:7.50,
                totalPrice:150.00
            },
            {
                pic: defaultPic,
                name: "雀巢咖啡1+2特浓",
                spec: "16包/盒",
                barCode: "93893829121",
                count:7,
                price:7.50,
                totalPrice:150.00
            },
        ]
    },
    {
        userId:"13d60d26-47b5-4232-8955-772ce56f0f9f",
        orderCode: '20200918981',
        companyName: '百世店加科技有限公司',
        orderTime: '2020-06-23 12:56',
        products: [
            {
                pic: coffee,
                name: "雀巢咖啡1+2特浓",
                spec: "16包/盒",
                barCode: "93893829121",
                count:3,
                price:7.50,
                totalPrice:150.00
            },
            {
                pic: tea,
                name: "雀巢咖啡1+2特浓",
                spec: "16包/盒",
                barCode: "93893829121",
                count:5,
                price:7.50,
                totalPrice:150.00
            },
            {
                pic: defaultPic,
                name: "雀巢咖啡1+2特浓",
                spec: "16包/盒",
                barCode: "93893829121",
                count:2,
                price:7.50,
                totalPrice:69.50
            },
        ]
    },
]
const Purchase = require('../services/purchaseOrders')

purchaseOrders.forEach(v=>Purchase.addPurchaseOrder(v))