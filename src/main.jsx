// default starts here
import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

// =========
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root';
import ErrorPage from "./error-page";
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import Donations from './components/Donations/Donations';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Statistics from './components/Statistics/Statistics';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donations",
        element: <Donations></Donations>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch('/data.json')
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: () => fetch('/data.json')
      },
    ]
  },
]);

// default starts here
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* ========= */}
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>

  </React.StrictMode>,
)
