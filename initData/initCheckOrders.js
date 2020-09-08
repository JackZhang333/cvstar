let checkOrders = [
    {   userId:"13d60d26-47b5-4232-8955-772ce56f0f9f",
        orderCode: '20200918981',
        orderTime: '2020-06-23 12:56',
        products: [
            {
                pic: '/img/tea.59807f4a.png',
                name: "雀巢咖啡1+2特浓",
                spec: "16包/盒",
                barCode: "93893829121",
                count:12,
                price:7.50,
                pPrice:6.50,
                totalPrice:450.00
            },
            {
                pic: '/img/tea.59807f4a.png',
                name: "雀巢咖啡1+2特浓",
                spec: "16包/盒",
                barCode: "93893829121",
                count:10,
                price:7.50,
                pPrice:6.50,
                totalPrice:150.00
            },
            {
                pic: '/img/tea.59807f4a.png',
                name: "雀巢咖啡1+2特浓",
                spec: "16包/盒",
                barCode: "93893829121",
                count:12,
                price:7.50,
                pPrice:6.50,
                totalPrice:150.00
            },
        ]
    },
    {
        userId:"13d60d26-47b5-4232-8955-772ce56f0f9f",
        orderCode: '20200918982',
        orderTime: '2020-07-23 12:56',
        products: [
            {
                pic: '/img/tea.59807f4a.png',
                name: "雀巢咖啡1+2特浓",
                spec: "16包/盒",
                barCode: "93893829121",
                count:12,
                price:7.50,
                pPrice:6.50,
                totalPrice:150.00
            },
            {
                pic: '/img/tea.59807f4a.png',
                name: "雀巢咖啡1+2特浓",
                spec: "16包/盒",
                barCode: "93893829121",
                count:2,
                price:7.50,
                pPrice:6.50,
                totalPrice:160.00
            },
            {
                pic: '/img/tea.59807f4a.png',
                name: "雀巢咖啡1+2特浓",
                spec: "16包/盒",
                barCode: "93893829121",
                count:12,
                price:7.50,
                pPrice:6.50,
                totalPrice:150.00
            },
        ]
    },
    {
        userId:"13d60d26-47b5-4232-8955-772ce56f0f9f",
        orderCode: '20200918983',
        orderTime: '2020-05-23 12:56',
        products: [
            {
                pic: '/img/tea.59807f4a.png',
                name: "雀巢咖啡1+2特浓",
                spec: "16包/盒",
                barCode: "93893829121",
                count:12,
                price:7.50,
                pPrice:6.50,
                totalPrice:150.00
            },
            {
                pic: '/img/tea.59807f4a.png',
                name: "雀巢咖啡1+2特浓",
                spec: "16包/盒",
                barCode: "93893829121",
                count:67,
                price:7.50,
                pPrice:6.50,
                totalPrice:150.00
            },
            
        ]
    },
    {
        userId:"13d60d26-47b5-4232-8955-772ce56f0f9f",
        orderCode: '20200918984',
        orderTime: '2020-06-23 12:56',
        products: [
            {
                pic: '/img/tea.59807f4a.png',
                name: "雀巢咖啡1+2特浓",
                spec: "16包/盒",
                barCode: "93893829121",
                count:7,
                price:7.50,
                pPrice:6.50,
                totalPrice:150.00
            },
            {
                pic: '/img/tea.59807f4a.png',
                name: "雀巢咖啡1+2特浓",
                spec: "16包/盒",
                barCode: "93893829121",
                count:6,
                price:7.50,
                pPrice:6.50,
                totalPrice:150.00
            },
            {
                pic: '/img/tea.59807f4a.png',
                name: "雀巢咖啡1+2特浓",
                spec: "16包/盒",
                barCode: "93893829121",
                count:9,
                price:7.50,
                pPrice:6.50,
                totalPrice:150.00
            },
            {
                pic: '/img/tea.59807f4a.png',
                name: "雀巢咖啡1+2特浓",
                spec: "16包/盒",
                barCode: "93893829121",
                count:7,
                price:7.50,
                pPrice:6.50,
                totalPrice:150.00
            },
        ]
    },
    {
        userId:"13d60d26-47b5-4232-8955-772ce56f0f9f",
        orderCode: '20200918985',
        orderTime: '2020-06-23 12:56',
        products: [
            {
                pic: '/img/tea.59807f4a.png',
                name: "雀巢咖啡1+2特浓",
                spec: "16包/盒",
                barCode: "93893829121",
                count:3,
                price:7.50,
                pPrice:6.50,
                totalPrice:150.00
            },
            {
                pic: '/img/tea.59807f4a.png',
                name: "雀巢咖啡1+2特浓",
                spec: "16包/盒",
                barCode: "93893829121",
                count:5,
                price:7.50,
                pPrice:6.50,
                totalPrice:150.00
            },
            {
                pic: '/img/tea.59807f4a.png',
                name: "雀巢咖啡1+2特浓",
                spec: "16包/盒",
                barCode: "93893829121",
                count:2,
                price:7.50,
                pPrice:6.50,
                totalPrice:69.50
            },
        ]
    },
]
const Check = require('../services/checkOrders')

checkOrders.forEach(v=>{
    Check.addCheckOrder(v)
})