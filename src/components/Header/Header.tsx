import React from "react";
import "./../../assets/scss/main.scss";
import Logo from "./../../assets/img/LOGO.svg";
import styles from "./Header.module.scss";
import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link
      style={{ textDecoration: match ? "underline" : "none" }}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
}
const Header = () => {
  return (
    <nav className={styles.header}>
      <img src={Logo} alt="Logo Kasa" className={styles.header_img} />
      <div>
        <CustomLink className={styles.header_link} to="/">
          Accueil
        </CustomLink>
        <CustomLink className={styles.header_link} to="/about">
          A propos
        </CustomLink>
      </div>
    </nav>
  );
};

export default Header;
