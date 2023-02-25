import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./navbar.css";
import "./responsiveness.css";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const itemList = [
    {
      text: "Home",
      link: "#home",
    },
    {
      text: "About",
      link: "#About",
    },

    {
      text: "Services",
      link: "#services",
    },
    {
      text: "Contact",
      link: "#contact",
    },
  ];
  // set menu icon to false on large devices
  // creaate a function to toggle when on small screen
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar((p) => !showNavbar);
  };

  return (
    <nav>
      <div className="logo">ZackExchange</div>

      <div className="Navbar">
        <div className="menu-icon" onClick={handleShowNavbar}>
          <MenuIcon />
        </div>
        {/* set navelement to false on large(horizontally ) */}
        <div className={`navigation-menu  ${showNavbar && "expanded"}`}>
          <ul>
            {itemList.map((text, index) => (
              <li key={index} onClick={handleShowNavbar}>
                <Link
                  style={{
                    fontSize: "1em",
                    fontWeight: "600",
                  }}
                  key={index}
                  to={text.link}
                  smooth
                >
                  {text.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
