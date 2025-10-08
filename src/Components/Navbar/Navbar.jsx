import React from "react";
import { Link, NavLink } from "react-router";
import "../../App.css";
import logoImg from "../../assets/logo.png";
import githubImg from "../../assets/githubLogo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm lg:px-8">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/apps">Apps</NavLink>
            </li>
            <li>
                <NavLink to="installation">Installation</NavLink>
            </li>
          </ul>
        </div>
        <Link to="/">
            <div className="flex items-center justify-center lg:gap-2.5 btn btn-ghost">
                <img className="w-[40px] h-[40px]" src={logoImg} alt="" />
                <span className="text-xl">AppHive</span>
            </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-2.5">
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/apps">Apps</NavLink>
            </li>
            <li>
                <NavLink to="/installation">Installation</NavLink>
            </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-primary" href="https://github.com/fasiyam" target="_blank">
            <img src={githubImg} alt="" />
            Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
