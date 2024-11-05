
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserLogin from './pages/loginForms/UserLogin';
import UserDashboardLayout from './layouts/UserDashboardLayout';
import UserRegister from './pages/registerForm.jsx/UserRegister';

import Chats from './pages/dashboard/Chats';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
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
        // {
        //   path: '',
        //   element:</>
        // }

  ]
    }


  ])

return <RouterProvider router={router} />;
};

export default App;
