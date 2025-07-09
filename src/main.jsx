import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CaseConverters from './pages/CaseConverters.jsx';
import Home from './pages/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/text-editor",
        element: <CaseConverters />,
      },
      {
        path: "/htlm-editor",
        element: <CaseConverters />,
      },
      {
        path: "/password-generator",
        element: <CaseConverters />,
      },
    ]
  },
  {
    path: "/case",
    element: <App />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
