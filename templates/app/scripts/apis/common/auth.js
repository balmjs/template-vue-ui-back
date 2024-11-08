// http://gitlab.yiban.co/yiban/yiban_ai/wikis/admin
export default [
  [
    'user',
    '/user',
    ['read', 'update'],
    {
      crud: {
        read: {
          '': 'userinfo'
        },
        update: {
          login: 'login',
          logout: 'logout'
        }
      }
    }
  ],
  [
    'system',
    '/system',
    ['read'],
    {
      crud: {
        read: {
          menu: 'menu'
        }
      }
    }
  ]
];
