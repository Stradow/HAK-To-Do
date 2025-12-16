import React from "react";
import { Link } from "react-router-dom";

function Notfoundpage() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-code">404</h1>
      <h2 className="notfound-title">Not Found</h2>

      <img
        className="notfound-logo"
        src="./src/assets/images/HAKLogo.png"
        alt="HAK Logo"
      />

      <Link to="/">
        <button className="notfound-btn">Back to homepage</button>
      </Link>
    </div>
  );
}

export default Notfoundpage;
