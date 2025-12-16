import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      {/* <h1 className="title">H.A.K</h1> */}
      <NavLink to={"/"}>
        <img alt="HAK Logo" src="./src/assets/images/HAKLogo.png" />
      </NavLink>

      <p className="prop-sentence">
        <i>Set up your day, and HAK it!</i>
      </p>

      <NavLink to={"/about-us"}>About Us</NavLink>
    </div>
  );
}

export default Navbar;
