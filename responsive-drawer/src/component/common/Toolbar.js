import React from "react";
import "./toolbar.css";
import { ReactComponent as Logo } from "../../assets/nav-logo.svg";
const Toolbar = (props) => {
  return (
    <header>
      <nav className="toolbar-big">
        <div id="profile-links">
          <div id="logo">
            <Logo />
          </div>
          <ul>
            <li>
              <a>Hello, LiQid</a>
            </li>
            <li className="left-border-box">
              <a> Logout</a>
            </li>
          </ul>
        </div>
        <div id="page-links">
          <ul>
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/">Settings</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
