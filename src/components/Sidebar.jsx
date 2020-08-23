import React from "react";
import logo from "../media/haruan.jpg";
import Icon from "./../common/icon";
import { NavLink, Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <header className="header text-center col-4 d-none d-lg-block">
      <div id="sidescroller">
        <div id="">
          <h1 className="blog-name pt-lg-4 mb-0">
            <a href="index.html">HARUNA MUSOKE</a>
          </h1>

          <nav className="navbar navbar-expand-md navbar-dark">
            <div
              id="navigation"
              className="collapse navbar-collapse flex-column"
            >
              <div className="profile-section pt-3 pt-lg-0">
                <img
                  className="profile-image mb-3 rounded-circle mx-auto"
                  src={logo}
                  alt="Profile"
                />

                <div className="bio mb-3">
                  I am a software developer and indeed a programmer. I am an
                  enthuthiastic programmer who is foused at buildiing reilable
                  and scalable software. I suggest you entrust with your next ,
                  current and future project because you will get more than you
                  expected. .<br />
                  <Link to="/about">Find out more about me</Link>
                </div>
                <ul className="social-list list-inline py-2 mx-auto">
                  <li className="list-inline-item">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.facebook.com/haruna.musoke.39/"
                    >
                      <Icon icon="facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/Harunamusoke"
                    >
                      <Icon icon="github" classess="fa-fw" />
                    </a>
                  </li>
                </ul>
                <hr />
              </div>

              <ul className="navbar-nav flex-column text-left">
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/">
                    <Icon icon="folder-home" classess="mr-2" />
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    <Icon icon="contacts" classess="mr-2" />
                    About Me
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <NavLink className="btn btn-outline-light" to="/contact">
            Hire Me
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Sidebar;
