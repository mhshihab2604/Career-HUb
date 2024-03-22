import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './Components/Root';
import Home from './Components/Home';
import Jobs from './Components/Jobs';
import Blog from './Components/Blog';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Components/ErrorPage';
import JobDetails from './Components/JobDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/Statistics",
        element: <Home></Home>
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/job/:id",
        loaderL: () => fetch("./jobs.json"),
        element: <JobDetails></JobDetails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
