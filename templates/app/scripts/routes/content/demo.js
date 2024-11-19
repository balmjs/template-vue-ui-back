import { $routerModel, indexView } from '@yiban-shared/routes/config';

const DemoList = () => import('@/pages/content/demo-list');
const DemoDetail = () => import('@/pages/content/demo-detail');

export default [
  $routerModel.createRoutes('demo', {
    indexView,
    listView: DemoList,
    detailView: DemoDetail
  })
];
