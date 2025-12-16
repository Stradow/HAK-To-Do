import React from "react";
import { Link } from "react-router-dom";

function Notfoundpage() {
  return (
    <>
      <h1>Notfoundpage</h1>
      <Link to="/">
        <button>Back to homepage</button>
      </Link>
    </>
  );
}

export default Notfoundpage;
