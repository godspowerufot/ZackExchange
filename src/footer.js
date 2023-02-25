import React from "react";
import { Facebook } from "@mui/icons-material";
import { Phone } from "@mui/icons-material";
import { WhatsApp } from "@mui/icons-material";
import { Telegram } from "@mui/icons-material";
import { Mail } from "@mui/icons-material";
import { HashLink as Link } from "react-router-hash-link";

import "./App.css";

function Footer() {
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
    {
      text: "F.A.G",
      link: "#fag",
    },
  ];
  return (
    <div>
      <div className="Footer" id="contact">
        <div className="divfooter">
          <div className="quicklinks " data-aos="fade-right">
            <h2>Quicklinks</h2>
            <ul>
              {itemList.map((text, index) => (
                <li key={index}>
                  <Link
                    style={{
                      fontSize: "1em",
                      fontWeight: "300",
                      textDecoration: "none",
                      color: "white",
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
          {/* middle work */}

          <div className="fag" data-aos="fade-up">
            <h3>{itemList.text}</h3>

            <div className="new">
              <a href="https://cryptonews.com/" className="quicklinks">
                News
              </a>
            </div>
          </div>
        </div>

        <div className="socialIcons" data-aos="fade-left">
          <span>
            <a
              href="https://web.facebook.com/profile.php?id=100086359764945&_rdc=1&_rdr"
              className="icons"
            >
              <Facebook />
            </a>
            <a href="tel:+2347089293254" className="icons">
              <Phone />
            </a>
            <a href="http://wa.me/+2347089293254" className="icons">
              <WhatsApp />
            </a>
            <a href="http://t.me/Zack3254" className="icons">
              <Telegram />
            </a>
            <a
              href="
https://mail.google.com/itywiz@gmail.com"
              className="icons"
            >
              <Mail />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
