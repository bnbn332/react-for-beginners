import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
    </div>
  );
}

export default Navigation;
