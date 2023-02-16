import { slide as Menu } from "react-burger-menu";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signOut } from "../../services/users.js";
import "./Hamburger.css";
import CountryMap from "../CountryMap/CountryMap";

function Hamburger({ user, setUser }) {
  const [isOpen, setOpen] = useState(false);

  const Navigate = useNavigate()

  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };

  const handleSignOut = async () => {
    setUser(null)
    await signOut()
    Navigate('/sign-in')
  }

  return (
    <Menu isOpen={isOpen} onOpen={handleIsOpen} onClose={handleIsOpen}>
        {user && <h2>Hello, {user.profile.username}</h2>}
      <Link to="/" className="logo" onClick={closeSideBar}>
        GourmetGather
      </Link>
      <div className="countryMap">
        <CountryMap closeSideBar={closeSideBar} />
      </div>
      {user ? (
        <p onClick={handleSignOut}>Sign Out</p>
      ) : (
        <Link to="/sign-in" className="menu-item" onClick={closeSideBar}>
          Sign In
        </Link>
      )}
      {/* <a href="/sign-out"className="menu-item">Sign out</a> */}
    </Menu>
  );
}

export default Hamburger;
