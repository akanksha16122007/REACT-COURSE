import { LOGO_URL } from "../utils/contants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = ({ cartItems }) => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  //const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between shadow-lg">
      <div className="logo-container">
        <img className="w-25 h-25" src={LOGO_URL} />
      </div>
      <div className="flex items-center font-medium ">
        <ul className="flex list-none p-4 m-4 items-center">
          <li className="px-4 text-lg">
            {onlineStatus ? (
              <i className="fa-solid fa-wifi"></i>
            ) : (
              <i className="fa-solid fa-plane-slash"></i>
            )}
          </li>
          <li className="px-4 text-lg">
            <Link to="/">
              <i className="fa-solid fa-house"></i> Home
            </Link>
          </li>
          <li className="px-4 text-lg">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 text-lg">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 text-lg">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 text-lg">
            <i className="fa-solid fa-cart-shopping"></i> Cart {cartItems}
          </li>
          <button
            className="p-2.5 bg-amber-300 border-2 border-solid border-[#c8a98a] rounded-lg cursor-pointer m-2.5 text-lg"
            onClick={() =>
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login")
            }
          >
            {btnNameReact}
          </button>
          {/* <li className="px-4">{loggedInUser}</li> */}
        </ul>
      </div>
    </div>
  );
};
export default Header;
