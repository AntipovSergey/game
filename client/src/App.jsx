import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import CategoryPage from "./components/pages/CategoryPage";
import MainPage from "./components/pages/MainPage";
import Layout from "./components/Layout";
import axios from "axios";

export default function App() {
  const [categories, setCategories] = useState([]);



  useEffect(() => {
    axios.get("/api/categories").then((res) => setCategories(res.data));
  }, []);




  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <MainPage categories={categories} />,
        },
        {
          path: "/quiz/:categoryId",
          element: <CategoryPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
