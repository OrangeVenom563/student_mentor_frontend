import React from "react";
import { Link } from "react-router-dom";
// import divPic from "./orange.jpg";
import "./header.style.css";

const Header = () => (
  <div className="header">
    <Link to="/">
    <div>StuMen</div>
      {/* <img className="logo-container" src={divPic} alt="logo" /> */}
    </Link>

    <div className="AppName">
      Student Mentor Corner
    </div>

    <div className="options">
      <Link className="option" to="/">
        Home
      </Link>

      <Link className="option" to="/student">
        Student
      </Link>

      <Link className="option" to="/mentor">
        Mentor
      </Link>
    </div>
  </div>
);

export default Header;
