import React from "react";
import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import BannerImg from "../../assets/img/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <>
      <Header />
      <div className="main">
        <Banner img={BannerImg} />
      </div>
      <Footer />
    </>
  );
};

export default About;
