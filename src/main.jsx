import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Component/Pages/Home/Home.jsx'
import College from './Component/Pages/Collage/College.jsx'
import Addmission from './Component/Pages/Addmission/Addmission.jsx'
import MyCollege from './Component/Pages/MyCollege/MyCollege.jsx'
import AuthProvider from './Component/AuthPorvider/AuthProvider.jsx'
import Login from './Component/Login/Login.jsx'
import SignUp from './Component/Resgister/SignUp.jsx'
import Profile from './Component/Pages/Profile/Profile.jsx'
import ErrorPage from './Component/ErrorPage/ErrorPage.jsx'
import CollegeDitails from './Component/Pages/Home/CollegeDitails/CollegeDitails.jsx'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/college",
        element: <College></College>,
      },
      {
        path: "/Admission",
        element: <Addmission></Addmission>,
      },
      {
        path: "/MyCollege",
        element: <MyCollege></MyCollege>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/SignUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/details/:id",
        element: <CollegeDitails></CollegeDitails>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={routes}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
