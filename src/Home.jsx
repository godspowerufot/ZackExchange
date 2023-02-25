import React from "react";
import "./App.css";
import africa from "./images/africa.avif";

function Home() {
  return (
    <div className="top">
      <div className="Home-wrapper" id="home">
        <div className="animation" data-aos="fade-left">
          <img src={africa} alt="" className="hero__image" />
        </div>
        <div className="animation" data-aos="fade-right">
          <span className="hometext-left">
            <h1>Trade with a new way in a new world</h1>
            <br />
          </span>
          <span className="HomeInnerText">
            Crypto Trading Whether it's the bull or bear market, learn different
            techniques on how to trade any market condition.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Home;
