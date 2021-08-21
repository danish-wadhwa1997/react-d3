import React from "react";
import "./sideDrawer.css";
import CloseIcon from "../assets/CloseIcon";
import FooterLogo from "../assets/FooterLogo";
import Logo from "../assets/Logo";
import ExitIcon from "../assets/ExitIcon";
import SettingIcon from "../assets/SettingIcon";
import HomeIcon from "../assets/HomeIcon";
import UserIcon from "../assets/UserIcon";
const SideDrawer = ({ open, toggleSideDrawer }) => {
  return (
    <div className={`side-drawer ${open ? "open" : ""}`}>
      <nav className="side-drawer-header">
        <div id="profile-links">
          <div id="logo-sidebar">
            <Logo fill="var(--highlight-color)" />
          </div>
          <div>
            <a>Hello, LiQid</a>
          </div>
        </div>
        <button id="close-icon" onClick={toggleSideDrawer}>
          <CloseIcon stroke="var(--primary-text-color)" />
        </button>
      </nav>

      <div className="side-drawer-content">
        <ul>
          <li>
            <a>
              <span className="side-drawer-nav-icon">
                <ExitIcon fill="var(--primary-text-color)" />
              </span>
              <span>Logout</span>
            </a>
          </li>
          <li>
            <a>
              <span className="side-drawer-nav-icon">
                <HomeIcon fill="var(--primary-text-color)" />
              </span>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a>
              <span className="side-drawer-nav-icon">
                <UserIcon fill="var(--primary-text-color)" />
              </span>
              <span>Profile</span>
            </a>
          </li>
          <li>
            <a>
              <span className="side-drawer-nav-icon">
                <SettingIcon fill="var(--primary-text-color)" />
              </span>
              <span>Setting</span>
            </a>
          </li>
        </ul>
      </div>
      <footer className="side-drawer-footer">
        <FooterLogo fill="var(--primary-text-color)" />
      </footer>
    </div>
  );
};

export default SideDrawer;
