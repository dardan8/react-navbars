import React from "react";
import "./navbar.css";
import { navBarItems } from "../data";

import { RiArrowRightLine, RiSearchLine } from "react-icons/ri";

import Logo from "../assets/dribble.svg";
import UserAvatar from "../assets/user-avatar.webp";

const Navbar = () => {
  return (
    <nav className="main-navigation">
      <img alt="logo" className="logo-image" src={Logo} />
      <ul>
        {navBarItems.map((item, index) => {
          return (
            <li key={index} className={item.items ? "has-item" : ""}>
              {item.name}
              {item.items ? (
                <div className="dropdown-area-1">
                  <ul>
                    {item.items.map((subitem, index) => {
                      return (
                        <li key={index}>
                          <a href={subitem.link} target="_self">
                            <subitem.icon className={subitem.class} />
                            <div className="submenu-item">
                              <div>
                                <p className="submenu-text-main">
                                  {subitem.title}
                                </p>
                                <p className="submenu-text-secondary">
                                  {subitem.subtitle}
                                </p>
                              </div>
                              <RiArrowRightLine className="arrow-dashboard" />
                            </div>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : (
                ""
              )}
            </li>
          );
        })}
      </ul>
      <div className="nav-second">
        <form>
          <RiSearchLine className="form-icon" />
          <input
            type="search"
            placeholder="Search..."
            className="input-field"
          />
        </form>
        <img src={UserAvatar} className="user-avatar" />
        <button className="primary-button">Upload</button>
      </div>
    </nav>
  );
};

export default Navbar;