<<<<<<< HEAD
import React, { useState } from "react";
import { Link } from "react-router-dom";
=======
// Navbar.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Css/Header.css";
>>>>>>> akshar

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <nav>
      <ul>
        <li
          className={activeLink === "home" ? "active" : ""}
          onClick={() => handleSetActiveLink("home")}
        >
          <Link to="/home">Home</Link>
        </li>
        <li
          className={activeLink === "about" ? "active" : ""}
          onClick={() => handleSetActiveLink("about")}
        >
          <Link to="/about">About</Link>
        </li>
        <li
          className={activeLink === "howtouse" ? "active" : ""}
          onClick={() => handleSetActiveLink("howtouse")}
        >
          <Link to="/howtouse">How to use</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
