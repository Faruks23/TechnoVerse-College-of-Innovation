import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Component/Pages/Home/Home.jsx'
import College from './Component/Pages/Collage/College.jsx'
import Addmission from './Component/Pages/Addmission/Addmission.jsx'
import MyCollege from './Component/Pages/MyCollege/MyCollege.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element:<Home></Home>
        
      },
      {
        path: '/college',
        element:<College></College>
        
      },
      {
        path: '/Admission',
        element:<Addmission></Addmission>
        
      },
      {
        path: '/MyCollege',
        element:<MyCollege></MyCollege>
        
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>
);
