import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  // extraStyles: ['src/assets/styles/global.less'],
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: 'CRUD 示例',
      path: '/table',
      component: './Table',
    },
    {
      name: '测试页',
      path: '/test',
      component: './Test',
    },
    {
      name: '测试表格',
      path: '/testTable',
      component: './TestTable',
    },
  ],
  npmClient: 'pnpm',
});
