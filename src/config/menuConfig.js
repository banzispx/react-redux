// import CategoryControl from '../pages/category/category'   //商品分类   
// import productControl from '../pages/product/home'   //商品   
// import user from '../pages/user/user'   //用户   
// import order from '../pages/order/order'   //用户   
// export const mapRouter = {
//   '/products/category': CategoryControl,
//   '/products/product': productControl,
//   '/user': user,
//   '/order':order,
// }

export const menuList = [
  {
    title: '首页', // 菜单标题名称
    key: '/home', // 对应的path
    icon: 'home', // 图标名称
    isPublic: true, // 公开的
  },
  {
    title: '商品',
    key: '/products',
    icon: 'appstore',
    children: [ // 子菜单列表
      {
        title: '分类管理',
        key: '/products/category',
        icon: 'bars'
      },
      {
        title: '商品管理',
        key: '/products/product',
        icon: 'tool'
      },
    ]
  },

  {
    title: '用户管理',
    key: '/user',
    icon: 'user'
  },
  {
    title: '订单管理',
    key: '/order',
    icon: 'windows',
  }
]

