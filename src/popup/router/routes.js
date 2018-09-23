import PageIndex from './pages/Index';
import EditCookie from './pages/EditCookie';
import SearchCookie from './pages/SearchCookie';

export default [
  {
    path: '/',
    component: PageIndex,
  },
  {
  	path: '/edit',
  	component: EditCookie
  },
  {
  	path: '/search',
  	component: SearchCookie
  }
];
