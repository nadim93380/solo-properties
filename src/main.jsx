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
import ErrorPage from './components/ErrorPage';
import AboutUs from './components/ContactUs';
import ContactUs from './components/ContactUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
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
        element: <PrivateRoute><Profile></Profile></PrivateRoute>,
      },
      {
        path: '/contact',
        element: <ContactUs></ContactUs>,
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
