import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <Link to={"https://github.com/Stradow/HAK-To-Do"}>
        <img src="./src/assets/images/Githublogo.png" alt="git-hub-logo" />
      </Link>
    </div>
  );
}

export default Footer;
