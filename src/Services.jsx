import React from "react";
import "./App.css";
function Services() {
  return (
    <section id="services">
      <span className="What_we_DO" data-aos="fade-left">
        What We Do
      </span>

      <div className="Service">
        <br />
        <div className=" cardingssection">
          <span className="Things_we_do" data-aos="fade-up">
            <p className="number active" data-v-09d9241f="">
              01
            </p>
            We open you to the traders psychology and how to properly analyze
            the market before entering a trade
          </span>

          <span className="Things_we_do" data-aos="zoom-in">
            <p className="number active" data-v-09d9241f="">
              02
            </p>
            we teach you the basics and foundation of cryptocurrency, how they
            came about, advantages, disadvantages
          </span>
          <span className="Things_we_do" data-aos="fade-left">
            <p className="number active" data-v-09d9241f="">
              03
            </p>
            we be giving accurate trading signals to help you place successful
            trades without having to go through the stress of analyzing the
            market
          </span>
          <span className="Things_we_do" data-aos="fade-right">
            <p className="number active" data-v-09d9241f="">
              04
            </p>{" "}
            "how to spot a good crypto project, how to spot a rug pull(scam)
            project and lots more
          </span>
        </div>
      </div>
    </section>
  );
}

export default Services;
