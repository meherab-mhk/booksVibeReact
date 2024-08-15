import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthorList from "./components/authorList/AuthorList";
import BookDetails from "./components/bookDetails/BookDetails";
import ErrorPage from "./components/errorPage/ErrorPage";
import Home from "./components/home/Home";
import JournalPricing from "./components/journalPricing/JournalPricing";
import ListedBooks from "./components/listedBooks/ListedBooks";
import MainLayout from "./components/main-layout/MainLayout";
import PagesToRead from "./components/pagesToRead/PagesToRead";
import ReadBooks from "./components/readBooks/ReadBooks";
import WishList from "./components/wishList/WishList";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/listed-books",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("/data.json"),
        children: [
          {
            path: "",
            element: <ReadBooks></ReadBooks>,
          },
          {
            path: "wishlist-books",
            element: <WishList></WishList>,
          },
        ],
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/book-details/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/author-list",
        element: <AuthorList></AuthorList>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/journal-pricing",
        element: <JournalPricing></JournalPricing>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
