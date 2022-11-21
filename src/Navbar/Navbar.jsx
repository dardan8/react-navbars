import React from "react";
import "./navbar.css";

import {
  RiDashboardLine,
  RiHeartsLine,
  RiBrushLine,
  RiMailLine,
  RiArrowRightLine,
} from "react-icons/ri";

import Logo from "../assets/dribble.svg";
const Navbar = () => {
  return (
    <nav className="main-navigation">
      <img alt="logo" className="logo-image" src={Logo} />
      <ul>
        <li className="has-item">
          Inspiration
          <div className="dropdown-area-1">
            <ul>
              <li>
                <a href="#" target="_self">
                  <RiDashboardLine className="icon-dashboard" />
                  <div className="submenu-item">
                    <div>
                      <p className="submenu-text-main">Explore Design Work</p>
                      <p className="submenu-text-secondary">
                        Trending designs to inspire you
                      </p>
                    </div>
                    <RiArrowRightLine className="arrow-dashboard" />
                  </div>
                </a>
              </li>

              <li>
                <a href="https://www.w3schools.com/">
                  <RiHeartsLine className="icon-heart" />
                  <div className="submenu-item">
                    <div>
                      <p className="submenu-text-main">New and Noteworthy</p>
                      <p className="submenu-text-secondary">
                        Latest news from our blog
                      </p>
                    </div>
                    <RiArrowRightLine className="arrow-heart" />
                  </div>
                </a>
              </li>
              <li>
                <a href="https://www.w3schools.com/">
                  <RiBrushLine className="icon-brush" />
                  <div className="submenu-item">
                    <div>
                      <p className="submenu-text-main">Certified Designers</p>
                      <p className="submenu-text-secondary">
                        Get quotes and samples from top designers
                      </p>
                    </div>
                    <RiArrowRightLine className="arrow-brush" />
                  </div>
                </a>
              </li>
              <li>
                <a href="https://www.w3schools.com/" target="_blank">
                  <RiMailLine className="icon-mail" />
                  <div className="submenu-item">
                    <div>
                      <p className="submenu-text-main">Weekly Warm-Up</p>
                      <p className="submenu-text-secondary">
                        Susbcribe to our weekly newsletter
                      </p>
                    </div>
                    <RiArrowRightLine className="arrow-mail" />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="has-item">
          Find Work
          <div className="dropdown-area-1">
            <ul>
              <li>
                <a href="https://www.w3schools.com/" target="_blank">
                  <RiDashboardLine className="icon-dashboard" />
                  <div className="submenu-item">
                    <div>
                      <p className="submenu-text-main">Explore Design Work</p>
                      <p className="submenu-text-secondary">
                        Trending designs to inspire you
                      </p>
                    </div>
                    <RiArrowRightLine className="arrow-dashboard" />
                  </div>
                </a>
              </li>

              <li>
                <a href="https://www.w3schools.com/">
                  <RiHeartsLine className="icon-heart" />
                  <div className="submenu-item">
                    <div>
                      <p className="submenu-text-main">New and Noteworthy</p>
                      <p className="submenu-text-secondary">
                        Latest news from our blog
                      </p>
                    </div>
                    <RiArrowRightLine className="arrow-heart" />
                  </div>
                </a>
              </li>
              <li>
                <a href="https://www.w3schools.com/">
                  <RiBrushLine className="icon-brush" />
                  <div className="submenu-item">
                    <div>
                      <p className="submenu-text-main">Certified Designers</p>
                      <p className="submenu-text-secondary">
                        Get quotes and samples from top designers
                      </p>
                    </div>
                    <RiArrowRightLine className="arrow-brush" />
                  </div>
                </a>
              </li>
              <li>
                <a href="https://www.w3schools.com/" target="_blank">
                  <RiMailLine className="icon-mail" />
                  <div className="submenu-item">
                    <div>
                      <p className="submenu-text-main">Weekly Warm-Up</p>
                      <p className="submenu-text-secondary">
                        Susbcribe to our weekly newsletter
                      </p>
                    </div>
                    <RiArrowRightLine className="arrow-mail" />
                  </div>
                </a>
              </li>
            </ul>
            </div>
        </li>

        <li>Learn Design</li>
        <li>Go Pro</li>
        <li className="has-item">Design Files
        <div className="dropdown-area-1">
            <ul>
              <li>
                <a href="https://www.w3schools.com/" target="_blank">
                  <RiDashboardLine className="icon-dashboard" />
                  <div className="submenu-item">
                    <div>
                      <p className="submenu-text-main">Explore Design Work</p>
                      <p className="submenu-text-secondary">
                        Trending designs to inspire you
                      </p>
                    </div>
                    <RiArrowRightLine className="arrow-dashboard" />
                  </div>
                </a>
              </li>

              <li>
                <a href="https://www.w3schools.com/">
                  <RiHeartsLine className="icon-heart" />
                  <div className="submenu-item">
                    <div>
                      <p className="submenu-text-main">New and Noteworthy</p>
                      <p className="submenu-text-secondary">
                        Latest news from our blog
                      </p>
                    </div>
                    <RiArrowRightLine className="arrow-heart" />
                  </div>
                </a>
              </li>
              <li>
                <a href="https://www.w3schools.com/">
                  <RiBrushLine className="icon-brush" />
                  <div className="submenu-item">
                    <div>
                      <p className="submenu-text-main">Certified Designers</p>
                      <p className="submenu-text-secondary">
                        Get quotes and samples from top designers
                      </p>
                    </div>
                    <RiArrowRightLine className="arrow-brush" />
                  </div>
                </a>
              </li>
              <li>
                <a href="https://www.w3schools.com/" target="_blank">
                  <RiMailLine className="icon-mail" />
                  <div className="submenu-item">
                    <div>
                      <p className="submenu-text-main">Weekly Warm-Up</p>
                      <p className="submenu-text-secondary">
                        Susbcribe to our weekly newsletter
                      </p>
                    </div>
                    <RiArrowRightLine className="arrow-mail" />
                  </div>
                </a>
              </li>
            </ul>
          </div>
          </li>
      </ul>
      <form>
      <RiArrowRightLine />
      <input type="search" placeholder="Search..." class="input-field"/>
        </form>      
      <img></img>
      <button>Upload</button>
    </nav>
  );
};

export default Navbar;
