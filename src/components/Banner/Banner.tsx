import React from "react";
import "./../../assets/scss/main.scss";
import styles from "./Banner.module.scss";

type Props = {
  img: string;
  title?: string;
};
const Banner = ({ img, title }: Props) => {
  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.300), rgba(0, 0, 0, 0.300)), url(${img})`,
      }}
    >
      {title ? <h1 className={styles.banner_title}>{title}</h1> : null}
    </div>
  );
};

export default Banner;
