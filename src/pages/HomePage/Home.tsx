import React from "react";
import "./HomePage.scss";
import Header from "./../../components/Header/Header";
import "./../../assets/scss/main.scss";
import Banner from "../../components/Banner/Banner";
import imgBanner from "../../assets/img/banner_home.png";
import Footer from "../../components/Footer/Footer";
import Cards from "../../components/Cards/Cards";

const Home = () => {
  return (
    <>
      <Header />
      <div className="main">
        <Banner img={imgBanner} title="Chez vous, partout et ailleurs" />
        <div className="cards_block">
          <Cards
            img="https://images.unsplash.com/photo-1558603668-6570496b66f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            title="eh coucou"
          />
          <Cards
            img="https://images.unsplash.com/photo-1558603668-6570496b66f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            title="eh coucou"
          />
          <Cards
            img="https://images.unsplash.com/photo-1558603668-6570496b66f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            title="eh coucou"
          />
          <Cards
            img="https://images.unsplash.com/photo-1558603668-6570496b66f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            title="eh coucou"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
