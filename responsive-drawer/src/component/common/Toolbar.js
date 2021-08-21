import React from "react";
import "./toolbar.css";
import HamburgerIcon from "../assets/HamburgerIcon";
import Logo from "../assets/Logo";
import ExitIcon from "../assets/ExitIcon";
const Toolbar = (props) => {
  return (
    <header>
      <nav id="toolbar-big">
        <div id="profile-links">
          <div id="logo">
            <Logo fill="var(--primary-text-color)" />
          </div>
          <ul>
            <li>
              <a>Hello, LiQid</a>
            </li>
            <li>
              <a>
                <div className="left-border-box">
                  <span className="side-drawer-nav-icon">
                    <ExitIcon fill="var(--primary-text-color)" />
                  </span>
                  Logout
                </div>
              </a>
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
      <nav id="toolbar-small">
        <div id="profile-links">
          <div id="logo">
            <Logo fill="var(--primary-text-color)" />
          </div>
          <div>
            <a>Hello, LiQid</a>
          </div>
        </div>
        <div id="page-links">
          <button id="hamburger" onClick={props.toggleSideDrawer}>
            <HamburgerIcon stroke="var(--highlight-color)" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
