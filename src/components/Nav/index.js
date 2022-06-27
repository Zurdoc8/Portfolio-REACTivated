import React from "react";
import { Navbar } from "react-bootstrap";
import {NavLink} from "react-router-dom";

function Nav(props) {
  return (
    <div>
      <Navbar bg="dark" sticky="top">
        <NavLink className="nav-link" to="/">
          <div class="text-green">
            <h4 class="nav-title-font">Andres Garza</h4>
          </div>
        </NavLink>
        <ul class="navitem-indent">
          <li class="nav-item">
            <NavLink to="/about">
              <div class="nav-font text-light">About Me</div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/portfolio">
              <div class="nav-font text-light">Portfolio</div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/contact">
              <div class="nav-font text-light">Contact</div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/resume">
              <div class="nav-font text-light">Resume</div>
            </NavLink>
          </li>
        </ul>
      </Navbar>
    </div>
  );
}

export default Nav;