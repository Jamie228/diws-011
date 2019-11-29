import React from 'react';

const navBarImage = {
    height: '50px'
};

export function NavBar(){

    return(
        <div>
            <nav classNameName="navbar navbar-expand-sm bg-light navbar-light">
                <a classNameName="navbar-brand" href="localhost:5500/index.html">
                    <img src="../images/UCP Colour Logo Landscape (transparent background).png" alt="logo" style={navBarImage}></img>
                </a>
                <span classNameName="navbar-brand mb-0 h1" href="#">
                   <strong>Computing</strong>
                </span>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="index.html">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Course Information
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a className="dropdown-item" href="bscInfo.html">BSc (Hons)</a>
            <a className="dropdown-item" href="fdscInfo.html">FdSc<span className="sr-only">(current)</span></a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="moduleExplorer.html">Module Explorer</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="calendar.html">Events Calendar</a>
        </li>
                    <li className="nav-item">
                        <a className="nav-link active" href="http://localhost:3000/">Virtual Open Day <span
                        className="badge badge-secondary">New</span><span className="sr-only">(current)</span></a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    );
}

export default NavBar;