import React, { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./component/navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import More from "./More";
import About from "./About";
import Footer from "./footer";
function App() {
  useEffect(() => {
    AOS.init({ duration: 2000, delay: 0 });
  }, []);
  return (
    <div style={{ overflowX: "hidden", overflowY: "hidden" }}>
      <Router>
        <Navbar />
        <Home />
        <Services />
        <More />
        <About />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
