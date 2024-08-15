import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleRating = () => {};
  return (
    <div>
      <div className="text-center bg-[#f3f3f3] rounded-3xl py-12 mb-6">
        <h3 className="font-bold text-[28px]">Books</h3>
      </div>
      <div className="text-center mb-10">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-error m-1 text-lg">
            Sort By &#8681;
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={handleRating}>
              <a>Rating</a>
            </li>
            <li>
              <a>Number of Pages</a>
            </li>
            <li>
              <a>Publish Year</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-5">
        <div className="flex justify-center lg:justify-start items-center -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap">
          <Link
            to=""
            onClick={() => setTabIndex(0)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 0
                ? "border border-b-0 rounded-t-lg border-black"
                : "border-b border-black"
            }`}
            rel="noopener noreferrer"
            href=""
          >
            <span className="font-medium text-base lg:text-xl">Read Books</span>
          </Link>
          <Link
            to="wishlist-books"
            onClick={() => setTabIndex(1)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 1
                ? "border border-b-0 rounded-t-lg border-black"
                : "border-b border-black"
            }`}
            rel="noopener noreferrer"
            href=""
          >
            <span className="font-medium text-base lg:text-xl">
              Wishlist Books
            </span>
          </Link>
        </div>
      </div>
      <div className="my-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default ListedBooks;
