import React from "react";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Header from "../Header/Header";
import Explore from "../Explore/Explore";
import Host from "../Host/Host";
import Live from "../Live/Live";
import Try from "../Try/Try";
import Discover from "../Discover/Discover";
import "./Home.css";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="App">
          <Header />
          <Explore />
          <Host />
          <Live />
          <Try />
          <Discover />
          <Footer />
    </div>
  );
};

export default Home;
