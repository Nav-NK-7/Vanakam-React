import { Link } from "react-router-dom";
import { logoimg } from "../utils/constant";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btn, setBtn] = useState("login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-2 ">
      <div className="flex">
        <img className="w-25 h-25" src={logoimg} />
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4  hover:text-fuchsia-800">
            Online Status:{onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4  hover:text-fuchsia-800">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4  hover:text-fuchsia-800">
            <Link to="/">Home</Link>
          </li>

          <li className="px-4  hover:text-fuchsia-800">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4  hover:text-fuchsia-800">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4  hover:text-fuchsia-800">
            <Link to="/signin">Sign In</Link>
          </li>
          <li className="px-4  hover:text-fuchsia-800 cursor-pointer">Cart</li>
          <li className="px-4  hover:text-fuchsia-800 ">
            <button
              className="login cursor-pointer"
              onClick={() => {
                btn === "login" ? setBtn("logout") : setBtn("login");
              }}
            >
              {btn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
