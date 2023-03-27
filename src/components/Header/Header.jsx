import React from "react";
import logo from "../../assets/images/Logo.svg";
const Header = () => {
  return (
    <div className="navbar bg-slate-900">
      <div className="container mx-auto px-5">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-white font-lato">
            <li>
              <a>Order</a>
            </li>
            <li>
              <a>Order Review</a>
            </li>
            <li>
              <a>Manage Inventory</a>
            </li>
            <li>
              <a>Login</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
