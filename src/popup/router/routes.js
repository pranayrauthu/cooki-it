import EditCookie from './pages/EditCookie';
import SearchCookie from './pages/SearchCookie';

export default [
  {
    path: '/',
    component: SearchCookie,
  },
  {
  	path: '/edit/:type',
  	component: EditCookie,
    name: 'edit'
  },
  {
  	path: '/search',
  	component: SearchCookie
  }
];
