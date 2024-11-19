import { responseHandler, errorHandler } from '@mock-server/handler';

const isAuthenticated = false;

export function getAuthApis(server) {
  server.post('/user/me', (schema, request) => {
    const data = JSON.parse(request.requestBody);

    const user = {
      id: 63,
      name: 'username'
    };

    return isAuthenticated ? responseHandler(user) : errorHandler();
  });

  server.post('/user/login', (schema, request) => responseHandler());

  server.post('/user/logout', (schema, request) => responseHandler());

  server.post('/system/menu', (schema, request) => {
    return responseHandler([
      {
        title: '菜单1',
        name: 'menu1',
        submenu: [
          {
            icon: 'icon1',
            title: '首页',
            name: 'home'
          },
          {
            icon: 'icon2',
            title: 'Demo',
            name: 'demo.list'
          }
        ]
      }
    ]);
  });
}
