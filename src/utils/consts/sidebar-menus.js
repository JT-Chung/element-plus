export default [
  {
    icon: 'ios-cart',
    name: 'products',
    title: '商品',
    children: [
      {
        title: '商品',
        route: '/products/products/index'
      },
      {
        title: '商品分类',
        route: '/products/products/categories'
      },
      {
        title: '商品评价',
        route: '/products/comments/index'
      }
    ]
  },
  {
    icon: 'md-pricetag',
    name: 'orders',
    title: '订单',
    children: [
      {
        title: '订单',
        route: '/orders/orders/index'
      }
    ]
  },
  {
    icon: 'md-help',
    name: 'helpers',
    title: '帮助',
    children: [
      {
        title: '帮助',
        route: '/helpers/helpers/index'
      },
      {
        title: '帮助分类',
        route: '/helpers/helpers/categories'
      }
    ]
  },
  {
    icon: 'ios-map',
    name: 'marketing',
    title: '营销',
    children: [
      {
        title: '广告',
        route: '/marketing/ads/index'
      },
      {
        title: '优惠券',
        route: '/marketing/coupons/index'
      }
    ]
  },
  {
    icon: 'md-person',
    name: 'wxUsers',
    title: '用户',
    children: [
      {
        title: '用户',
        route: '/wxUsers/wxUsers/index'
      }
    ]
  },
  {
    icon: 'md-key',
    name: 'rbac',
    title: '角色权限',
    children: [
      {
        title: '角色',
        route: '/rbac/rbac/roles'
      },
      {
        title: '资源',
        route: '/rbac/rbac/resources'
      }
    ]
  },
  {
    icon: 'logo-buffer',
    name: 'surveys',
    title: '问卷调查',
    children: [
      {
        title: '主题',
        route: '/surveys/surveys/subjects'
      },
      {
        title: '结果',
        route: '/surveys/surveys/results'
      }
    ]
  },
  {
    icon: 'ios-print',
    name: 'logs',
    title: '日志',
    children: [
      {
        title: '日志',
        route: '/logs/logs/index'
      }
    ]
  }
]
