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
          <li>Home</li>
          <li>Contact Us</li>
          <li>Sign In</li>
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
