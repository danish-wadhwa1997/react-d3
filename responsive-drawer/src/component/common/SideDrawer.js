import React from "react";
import "./sideDrawer.css";
import CloseIcon from "../assets/CloseIcon";
import FooterLogo from "../assets/FooterLogo";
import Logo from "../assets/Logo";
import ExitIcon from "../assets/ExitIcon";
import SettingIcon from "../assets/SettingIcon";
import HomeIcon from "../assets/HomeIcon";
import UserIcon from "../assets/UserIcon";
import IconLabel from "./IconLabel";
const SideDrawer = ({ open, toggleSideDrawer }) => {
  return (
    <div className={`side-drawer ${open ? "open" : ""}`}>
      <nav className="side-drawer-header">
        <div id="profile-links">
          <div id="logo-sidebar">
            <Logo fill="var(--secondary-color)" />
          </div>
          <div>
            <a>Hello, LiQid</a>
          </div>
        </div>
        <button id="close-icon" onClick={toggleSideDrawer}>
          <CloseIcon stroke="var(--primary-color)" />
        </button>
      </nav>

      <div className="side-drawer-content">
        <ul>
          <li>
            <a>
              <IconLabel label="Logout" Icon={ExitIcon} />
            </a>
          </li>
          <li>
            <a>
              <IconLabel label="Home" Icon={HomeIcon} />
            </a>
          </li>
          <li>
            <a>
              <IconLabel label="Profile" Icon={UserIcon} />
            </a>
          </li>
          <li>
            <a>
              <IconLabel label="Setting" Icon={SettingIcon} />
            </a>
          </li>
        </ul>
      </div>
      <footer className="side-drawer-footer">
        <FooterLogo fill="var(--primary-color)" />
      </footer>
    </div>
  );
};

export default SideDrawer;
