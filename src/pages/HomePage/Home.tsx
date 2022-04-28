import React, { useEffect } from "react";
import "./HomePage.scss";
import Header from "./../../components/Header/Header";
import "./../../assets/scss/main.scss";
import Banner from "../../components/Banner/Banner";
import imgBanner from "../../assets/img/banner_home.png";
import Footer from "../../components/Footer/Footer";
import Cards from "../../components/Cards/Cards";
import data from '../../data/data.json'

const Home = () => {
  return (
    <>
      <Header />
      <div className="main">
        <Banner img={imgBanner} title="Chez vous, partout et ailleurs" small />
        <div className="cards_block">
          {
            data.map((house: any, index) => {
              return (<Cards
                img={`${house.cover}`}
                title={house.title}
                id={house.id}
                key={index}
              />)
            })
          }
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
