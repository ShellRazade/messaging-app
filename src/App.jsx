
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserLogin from './pages/loginForms/UserLogin';
import UserDashboardLayout from './layouts/UserDashboardLayout';
import UserRegister from './pages/registerForm.jsx/UserRegister';
import Chats from './pages/dashboard/Chats';
import Settings from './pages/dashboard/Settings';
import Addroom from './pages/dashboard/Addroom';
import Chatroom from './pages/dashboard/Chatroom';
import Userpop from './pages/dashboard/Userpop';
import Landing from './pages/landingPage/Landing';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing/>
    },
    {
      path: '/login',
      element: <UserLogin />
    },
    {
      path: '/register',
      element: <UserRegister />
    },

    {
      path: '/dashboard',
      element: <UserDashboardLayout />,
      children: [
        {
          index: true,
          element: <Chats />
        },
        {
          path: 'chats',
          element: <Chats />
        },
        {
          path: 'settings',
          element: <Settings />
        },
        {
          path: 'add',
          element: <Addroom />
        },
        {
          path: 'chatroom',
          element: <Chatroom/>
        },
        {
          path: 'pop',
          element: <Userpop/>
        },
      ]
    }


  ])

  return <RouterProvider router={router} />;
};

export default App;
