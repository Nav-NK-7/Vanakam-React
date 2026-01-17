import { Link } from "react-router-dom";
import { logoimg } from "../utils/constant";
import { useState } from "react";
const Header = () => {
  const [btn, setBtn] = useState("login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logoimg} />
      </div>

      <div className="nav-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btn === "login" ? setBtn("logout") : setBtn("login");
            }}
          >
            {btn}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
