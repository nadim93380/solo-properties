import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home';
import PropertyDetails from './Pages/PropertyDetails';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import AuthProvidor from './Provider/AuthProvidor';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/fakeData.json'),
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><PropertyDetails></PropertyDetails></PrivateRoute>,
        loader: () => fetch('/fakeData.json'),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/profile',
        element: <Profile></Profile>,
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvidor>
      <RouterProvider router={router} />
    </AuthProvidor>
  </React.StrictMode>,
)
