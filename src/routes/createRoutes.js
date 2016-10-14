import Layout from '../components/Layout/Layout';
import { homeRoute, getChildRoutes } from './routes';

export const createRoutes = (store) => ({
  path: '/',
  component: Layout,
  indexRoute: homeRoute,
  childRoutes: getChildRoutes(store)
});

export default createRoutes;
