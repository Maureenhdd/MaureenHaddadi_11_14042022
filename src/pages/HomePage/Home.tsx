import React from "react";
import "./HomePage.scss";
import Header from "./../../components/Header/Header";
import "./../../assets/scss/main.scss";
import Banner from "../../components/Banner/Banner";
import imgBanner from "../../assets/img/banner_home.png";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div className="main">
        <Banner img={imgBanner} title="Chez vous, partout et ailleurs" />
        <h1>COUCOU</h1>
        <h1>COUCOU</h1>

        <h1>COUCOU</h1>

        <h1>COUCOU</h1>

        <h1>COUCOU</h1>
      </div>
      <Footer />
    </>
  );
};

export default Home;
