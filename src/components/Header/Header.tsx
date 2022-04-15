import React from "react";
import "./../../assets/scss/main.scss";
import Logo from "./../../assets/img/LOGO.svg";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className={styles.header}>
      <img src={Logo} alt="Logo Kasa" className={styles.header_img} />
      <div>
        <Link className={styles.header_link} to="/">
          Accueil
        </Link>
        <Link className={styles.header_link} to="/about">
          A propos
        </Link>
      </div>
    </nav>
  );
};

export default Header;
