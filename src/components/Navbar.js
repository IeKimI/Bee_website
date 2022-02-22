import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            to="/Bee_website/"
            className="navbar-logo"
            onClick={closeMobileMenu}
          >
            Bee <i className="fab fa-forumbee" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/Bee_website/"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Bee_website/exhibit"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Exhibit
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Bee_website/pictures"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Pictures
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Bee Tour</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
