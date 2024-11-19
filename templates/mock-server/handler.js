export function responseHandler(data = {}) {
  return {
    code: 200,
    message: 'ok',
    data
  };
}

export function errorHandler(data = {}) {
  return {
    code: 401,
    message: 'error',
    data
  };
}
