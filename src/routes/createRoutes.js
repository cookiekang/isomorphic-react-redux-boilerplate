import Layout from '../components/Layout/Layout';
import { getChildRoutes } from './routes';

export const createRoutes = (store) => ({
  path: '/',
  component: Layout,
  childRoutes: getChildRoutes(store)
});

export default createRoutes;
