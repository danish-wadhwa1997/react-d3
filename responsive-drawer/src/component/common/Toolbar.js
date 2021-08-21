import React from "react";
import "./toolbar.css";
import HamburgerIcon from "../assets/HamburgerIcon";
import Logo from "../assets/Logo";
import ExitIcon from "../assets/ExitIcon";
import HomeIcon from "../assets/HomeIcon";
import UserIcon from "../assets/UserIcon";
import SettingIcon from "../assets/SettingIcon";
import IconLabel from "./IconLabel";
const Toolbar = (props) => {
  return (
    <header>
      <nav id="toolbar-big">
        <div id="profile-links">
          <div id="logo">
            <Logo fill="var(--primary-color)" />
          </div>
          <ul>
            <li>
              <a>Hello, LiQid</a>
            </li>
            <li>
              <a>
                <div className="left-border-box">
                  <IconLabel label="Logout" Icon={ExitIcon} />
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div id="page-links">
          <ul>
            <li>
              <a href="/">
                <IconLabel label="Home" Icon={HomeIcon} />
              </a>
            </li>
            <li>
              <a href="/">
                <IconLabel label="Profile" Icon={UserIcon} />
              </a>
            </li>
            <li>
              <a href="/">
                <IconLabel label="Settings" Icon={SettingIcon} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="toolbar-small">
        <div id="profile-links">
          <div id="logo">
            <Logo fill="var(--primary-color)" />
          </div>
          <div>
            <a>Hello, LiQid</a>
          </div>
        </div>
        <div id="page-links">
          <button id="hamburger" onClick={props.toggleSideDrawer}>
            <HamburgerIcon stroke="var(--secondary-color)" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
