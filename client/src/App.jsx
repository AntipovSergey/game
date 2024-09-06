import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <MainPage  />,
        },
        {
          path: '/:name',
          element: <OneExersizePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

