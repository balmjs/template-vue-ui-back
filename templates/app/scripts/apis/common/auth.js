export default [
  [
    'user',
    '/user',
    ['read', 'update'],
    {
      crud: {
        read: {
          '': 'me'
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
