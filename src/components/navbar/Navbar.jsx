import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="Navbar">
      <h1 className="Navbar_title">کریپتو یار</h1>
      <ul className="Navbar_list">
        <li>
          <NavLink exact={true} to="/">
            لیست انتخابی
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
