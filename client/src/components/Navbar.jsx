import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
          </ul>
        </div>
        <h2 className="btn btn-ghost text-xl">daisyUI</h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/news">News</NavLink>
          </li>
          <li>
            <NavLink to="/about">About us</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <div className="flex justify-center gap-4">
          <Link to="/login">
            <a className="btn bg-black text-white">login</a>
          </Link>
          <Link to="/register">
            <a className="btn bg-black text-white">sign up</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
