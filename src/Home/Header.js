import React, { useState } from "react";
import "../Css/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const menuOpen = () => {
    var nav = document.getElementById("navigation");
    nav.classList.add("active");
  };

  const menuClose = () => {
    var nav = document.getElementById("navigation");
    nav.classList.remove("active");
  };

  const scrollToHome = () => {
    const backgroundSection = document.getElementById("background");
    if (backgroundSection) {
      backgroundSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const CPSection = document.getElementById("About");
    if (CPSection) {
      CPSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollTohowtouse = () => {
    const ProjectSection = document.getElementById("project");
    if (ProjectSection) {
      ProjectSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTeam = () => {
    const TeamSection = document.getElementById("team");
    if (TeamSection) {
      TeamSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const activate = (e) => {
    // console.log(e.target.parentElement);
    var navLists = document.querySelectorAll(".nav-list");
    navLists.forEach((list) => {
      if (list.classList.contains("active")) {
        list.classList.remove("active");
      }
    });
    e.target.parentElement.classList.add("active");
  };

  return (
    <header>
      <nav id="navigation">
        {/* <div className="intro">
          <h2>HEllo</h2>
        </div> */}
        <ul>
          <li className="nav-list active" onClick={activate}>
            <a href="/home" onClick={scrollToHome}>
              Home
            </a>
          </li>

          <li className="nav-list" onClick={activate}>
            <a href="/about" onClick={scrollToAbout}>
              About
            </a>
          </li>
          <li className="nav-list" onClick={activate}>
            <a href="/howtouse" onClick={scrollTohowtouse}>
              How To Use
            </a>
          </li>
          <li className="nav-list" onClick={activate}>
            <a href="/team" onClick={scrollToTeam}>
              Team
            </a>
          </li>

          <li className="nav-list" onClick={activate}>
            <Link to="/StartDetectionPage">Start Detection</Link>
          </li>

          <i
            id="menu-close"
            className="fa-solid fa-xmark"
            onClick={menuClose}
          ></i>
        </ul>
      </nav>
      <div className="menu-icon">
        <i id="menu-toggle" className="fa-solid fa-bars" onClick={menuOpen}></i>
      </div>
    </header>
  );
};

export default Header;
