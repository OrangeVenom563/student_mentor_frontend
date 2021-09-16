import React from "react";
import { Link } from "react-router-dom";
import "./tab.styles.css";

const TwoBoxNav = () => {
  return (
    <div className="tab-switch">
      <div className="sub-tab">Student</div>
      <div className="sub-tab">Mentor</div>
    </div>
  );
};

export default TwoBoxNav