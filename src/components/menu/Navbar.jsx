import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const nav = (
    <>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        <li className="font-semibold text-lg">Home</li>
      </NavLink>
      <NavLink to="/listed-books">
        <li className="font-semibold text-lg">Listed Books</li>
      </NavLink>
      <NavLink to="/pages-to-read">
        <li className="font-semibold text-lg">Pages to Read</li>
      </NavLink>
      <NavLink to="/author-list">
        <li className="font-semibold text-lg">Author List</li>
      </NavLink>
      <NavLink to="/journal-pricing">
        <li className="font-semibold text-lg">Journal Price</li>
      </NavLink>
    </>
  );

  return (
    <div>
      <div className="navbar mb-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu text-center menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {nav}
            </ul>
          </div>
          <Link to="/">
            <h3 className="font-bold text-2xl lg:text-[28px]">Books Vibe</h3>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-4 px-1">{nav}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-error mr-3 text-white font-semibold text-sm lg:text-lg">
            Sign In{" "}
          </a>
          <a className="btn btn-success text-white font-semibold text-sm lg:text-lg">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
