import { $routerModel } from '@yiban-shared/routes/config';
import Login from '@/pages/common/login';

const Home = () => import('@/pages/common/home');

export default [
  $routerModel.createRoute('/login', 'login', Login),
  $routerModel.createRoute('/home', 'home', Home, {
    meta: {
      requiresAuth: true
    }
  })
];
