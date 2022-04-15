import React from "react";
import "./../../assets/scss/main.scss";
import Logo from "./../../assets/img/LOGO_white.svg";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={Logo} alt="Logo Kasa" className={styles.footer_img} />
      <p className={styles.footer_text}>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
