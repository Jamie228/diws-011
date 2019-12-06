import React from "react";
import logo from "./images/UCPLogo.png";

const imgStyle = {
  height: "50px"
};

export function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="logo" style={imgStyle} />
      </a>
      <span className="navbar-brand mb-0 h1" href="#">
        <strong>Computing</strong>
      </span>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="http://localhost:5500/index.html">
              Home<span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Course Information
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="http://localhost:5500/bscInfo.html">
                BSc (Hons)
              </a>
              <a className="dropdown-item" href="http://localhost:5500/fdscInfo.html">
                FdSc
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="http://localhost:5500/moduleExplorer.html">
              Module Explorer
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="http://localhost:5500/calendar.html">
              Events Calendar
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="http://localhost:3000/">
              Virtual Open Day{" "}
              <span className="badge badge-secondary">New</span>
              <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
