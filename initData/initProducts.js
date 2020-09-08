let products = [
    {
      userId:"13d60d26-47b5-4232-8955-772ce56f0f9f",
      type:'有码商品',
      pic:'/img/tea.59807f4a.png',
      name: "雀巢咖啡1+2特浓",
      spec: "16包/盒",
      barCode: "93893829121",
      price: "18.62",
      categary:'冲调饮品冲调饮品冲调饮品冲调饮品',
      pPrice:'15.00',
      stock:15,
      quickAdd:false
    },
    {
      userId:"13d60d26-47b5-4232-8955-772ce56f0f9f",
      type:'无码商品',
      pic: '/img/tea.59807f4a.png',
      name: "康师傅冰红茶",
      spec: "25 ml/盒",
      barCode: "93893829122",
      price: "18.00",
      categary:'水和饮料',
      pPrice:'17.00',
      stock:201,
      quickAdd:true

    },
    {
      userId:"13d60d26-47b5-4232-8955-772ce56f0f9f",
      type:'有码商品',
      pic: '/img/tea.59807f4a.png',
      name: "康师傅大食袋红烧牛肉面康师傅大食袋红烧牛肉面",
      spec: "108g/包",
      barCode: "93893829123",
      price: "4.50",
      categary:'方便速食',
      pPrice:'3.00',
      stock:129,
      quickAdd:false

    },
    {
      userId:"13d60d26-47b5-4232-8955-772ce56f0f9f",
      type:'有码商品',
      pic: '/img/tea.59807f4a.png',
      name: "雀巢咖啡1+2特浓",
      spec: "16包/盒",
      barCode: "93893829124",
      price: "18.62",
      categary:'膨化食品',
      pPrice:'15.00',
      stock:299,
      quickAdd:false

    },
    {
      userId:"13d60d26-47b5-4232-8955-772ce56f0f9f",
      type:'有码商品',
      pic: '/img/tea.59807f4a.png',
      name: "康师傅冰红茶",
      spec: "25 ml/盒",
      barCode: "93893829125",
      price: "9.00",
      categary:'休闲小食',
      pPrice:'15.00',
      stock:32,
      quickAdd:false

    },
    {
      userId:"13d60d26-47b5-4232-8955-772ce56f0f9f",
      type:'有码商品',
      pic: '/img/tea.59807f4a.png',
      name: "康师傅大食袋红烧牛肉面康师傅大食袋红烧牛肉面",
      spec: "108g/包",
      barCode: "93893829126",
      price: "4.50",
      categary:'米面粮油',
      pPrice:'15.00',
      stock:67,
      quickAdd:false

    },
  ];
  const product= require('../services/products')
  products.forEach(v=>product.addProduct(v))