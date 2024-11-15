import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { CentersPage } from './pages/CentersPage';
import { CenterDetail } from './pages/CenterDetail';

import { ErrorPage } from './pages/ErrorPage';

import './global.css';


const App = () => {
  return (
    <div className="container">
      <h1>Dětský koutek</h1>
      <Link to="/">Domů</Link>
      <span>|</span>
      <Link to="/about">O nás</Link>
      <span>|</span>
      <Link to="/contact">Kontakt</Link>
      <span>|</span>
      <Link to="/centers">Pobočky</Link>
      <Outlet />
    </div>
  );
};


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'centers',
        element: <CentersPage />,
      
        children: [
          {
              path: '/centers/:id',
              element: <CenterDetail/>
          }
      ]
    }
    ]
  }
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />
);