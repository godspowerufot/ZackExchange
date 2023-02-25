import React from "react";
import "./App.css";
import logo from "./images/hand.png";
import yellow from "./images/customers.svg";
import yellows from "./images/shield.svg";
function More() {
  return (
    <section id="About">
      <div>
        <div className="Information" data-aos="fade-up">
          <div className="moreInformation" data-aos="fade-left">
            <h1>Information is Money</h1>
            <p>
              Get started with crypto insights, tutorials or company updates
            </p>
          </div>

          <img
            src={logo}
            alt="info-pic"
            className="heros_image"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-delay="300"
          />
        </div>
      </div>

      <div className="wy">
        <div
          className="trust"
          style={{
            fontFamily: "Jost, sans-serif",
            fontWeight: "700",
            textAlign: "center",
            fontSize: "2rem",

            color: "#492b7c",
          }}
        >
          <h3> Why you should trust us</h3>
        </div>
        <div className="Whyshould">
          <br />
          <div className=" cardingssections">
            <span className="Things_we_do_" data-aos="fade-right">
              <img src={yellow} alt="yellowcard" style={{ width: "30px" }} />
              <p className="number active" data-v-09d9241f="">
                Built for You
              </p>
              The ZackExchange platform is built on our mission "Financial
              freedom for all". We want everyone to have access to
              cryptocurrency and the financial freedom it provides.
            </span>

            <span className="Things_we_do_" data-aos="fade-left">
              <img src={yellows} alt="security" style={{ width: "30px" }} />
              <p className="number active" data-v-09d9241f="">
                Security
              </p>
              Secure Security of our customers’ funds is our top priority. Our
              academy is built on information from the ground up with
              streamlined security for our students and various other
              best-of-breed security controls.
            </span>
          </div>
        </div>
      </div>

      <div className="cardSection" id="fag">
        <div className="cardone">
          <div className="Services">
            <div>
              <span className="Thingss_we_do" data-aos="fade-up">
                <p className="number active" data-v-09d9241f="">
                  01
                  <br />
                  What is Crytocurrency?
                </p>
                This is a seemingly simple question, but since most people
                answer about what they think, hope, or want cryptocurrencies to
                be, it is a confusing one. Cryptocurrencies are a digital asset
                that started as a medium of exchange for people to buy goods and
                services. Over time, their functionality has expanded.
              </span>

              <span className="Thingss_we_do" data-aos="zoom-in">
                <p className="number active" data-v-09d9241f="">
                  02
                  <br />
                  How are cryptocurrency transactions recorded?
                </p>
                Cryptocurrency transactions are recorded on a shared, digital
                ledger called a blockchain. This is decentralized technology,
                spread across many computers, that records every transaction.
              </span>
              <span className="Thingss_we_do" data-aos="fade-left">
                <p className="number active" data-v-09d9241f="">
                  03
                  <br />
                  Are blockchain and cryptocurrencies the same?
                </p>
                No. Blockchain is the technology that allows for
                cryptocurrencies to work. It is a decentralized and digital
                ledger of transactions used for cryptocurrencies and other
                assets/functions. It is important to separate the technology
                behind cryptocurrencies from the actual cryptocurrencies.out
                having to go through the stress of analyzing the market.
              </span>
              <span className="Thingss_we_do" data-aos="fade-right">
                <p className="number active" data-v-09d9241f="">
                  04
                  <br />
                  What is a crypto wallet?
                </p>{" "}
                simply put, crypto wallets are places to store digital assets
                more securely than just on an exchange. You hold your wallet via
                an exchange account, custody wallet, or outside of the exchange.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default More;
