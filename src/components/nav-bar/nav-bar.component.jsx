//import { useState, useEffect } from "react";
import {Routes, Route, Link} from "react-router-dom";

import "./nav-bar.css";

const NavBar = () => {
  //const [selectedMenu, setSelectedMenu] = useState();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <div className="navbar-brand">
            <Link className="nav-link" to="/">
              <img src="/images/logo.png" width="48px" alt="Trending Courses"></img><span className="align-middle">Trending Courses</span>
            </Link>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/mycourses">My Courses</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar;
