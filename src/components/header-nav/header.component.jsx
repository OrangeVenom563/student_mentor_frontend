import React from "react";
import { Link } from "react-router-dom";
import "./header.style.css";

const Header = () => (
  <div className="header">
    <div className="AppName">Student Mentor Corner</div>

    <div className="options">
     
      <Link className="option" to="/create">
        Create
      </Link>

      <Link className="option" to="/">
        View
      </Link>

      <Link className="option" to="/change">
        Change
      </Link>
    </div>
  </div>
);

export default Header;
