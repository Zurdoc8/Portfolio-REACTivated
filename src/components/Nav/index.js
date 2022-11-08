import React from "react";
import {NavLink} from "react-router-dom";

function Nav(props) {
  return (
    <div>
      <div bg="dark" sticky="top" className="nv">
        <NavLink className="nav-link" to="/">
          <div className="text-green">
            <h4 className="nav-title-font">Andres Garza</h4>
          </div>
        </NavLink>
        <ul className="navitem-indent">
          <li className="nav-item">
            <NavLink to="/about">
              <div className="nav-font text-light">About Me</div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolio">
              <div className="nav-font text-light">Portfolio</div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact">
              <div className="nav-font text-light">Contact</div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/resume">
              <div className="nav-font text-light">Resume</div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;