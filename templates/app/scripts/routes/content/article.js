import { $routerModel, indexView } from '@yiban-shared/routes/config';

const ArticleList = () => import('@/pages/content/article-list');
const ArticleDetail = () => import('@/pages/content/article-detail');

export default [
  $routerModel.createRoutes('article', {
    indexView,
    listView: ArticleList,
    detailView: ArticleDetail
  })
];
