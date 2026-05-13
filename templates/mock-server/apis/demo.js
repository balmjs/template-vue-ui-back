import { responseHandler } from '@mock-server/handler';

export function getDemoApis(server) {
  server.post('/demo/index', (schema, request) => {
    const list = [
      {
        id: 1,
        title: '标题1'
      },
      {
        id: 2,
        title: '标题2'
      },
      {
        id: 3,
        title: '标题3'
      }
    ];

    return responseHandler({
      list,
      total: list.length
    });
  });

  server.post('/demo/info', (schema, request) => {
    const data = JSON.parse(request.requestBody);

    return responseHandler({
      id: data.id,
      title: `标题${data.id}`
    });
  });
}
