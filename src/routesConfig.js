import App from './components/App';
import UserSaveBase from './components/UserSaveBase';
import UserListPage from './components/UserListPage'; 

const routesConfig = [
  {
    path: '/',
    element: <App />
  },
  {
    path: '/user/:id?',
    element: <UserSaveBase />
  },
  {
    path: '/users',
    element: <UserListPage /> 
  }
];

export default routesConfig;
