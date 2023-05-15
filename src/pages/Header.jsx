import { Link } from "react-router-dom";
import home from "../assets/home.png";

function Header () {
  return (
    <div className="header">
      <Link to="/">
        <img src={home} alt="" />{" "}
      </Link>
    </div>
  );
}

export default Header;
