import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import { UserInfo } from "./../context/UserContext";

const Header = () => {
  const [login, setLogin] = useState(false);
  const onlineStatus = useOnlineStatus();
  const { userName, setUserName } = useContext(UserInfo);

  const handleLogin = () => {
    const newLogin = !login;
    setLogin(newLogin);

    if (newLogin) {
      setUserName("Manish Sharma");
    } else {
      setUserName("Default User");
    }
  };

  console.log("onlineStatus", onlineStatus);
  return (
    <div className="flex justify-between bg-blue-50 shadow">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Logo" className="logo w-30" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">{onlineStatus ? "🟢" : "🚫"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">Cart</li>
          <button className="button" onClick={handleLogin}>
            {login ? "Logout" : "Login"}
          </button>
          <li className="px-4">{userName}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
