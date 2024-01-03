// Navbar.js

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Css/Header.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const navigate = useNavigate();

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  const handleButtonClick = () => {
    navigate("/StartDetectionPage");
  };
  const buttonStyle = {
    backgroundColor: "white", // Set the background color
    color: "#9830dd", // Set the text color
    padding: "10px 15px", // Set padding
    border: "none", // Remove border
    borderRadius: "5px", // Add border radius
    cursor: "pointer", // Add pointer cursor on hover
    display: "flex",
    flexdirection: "end",
  };
  return (
    <div className="intro">
      <nav>
        {" "}
        <h1 className="introduction">ASL HandSign Detection </h1>
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
          <li>
            {/* Button to open a new page */}
            <button style={buttonStyle} onClick={handleButtonClick}>
              New Page
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
