import '@mock-server';

const MOCK = false;

const useMock = () => MOCK;

export default {
  install(Vue) {
    Vue.prototype.$mock = MOCK;
  }
};
export { useMock };
export const DEBUG = true; // 仅限独立调试本地服务器调试开发
