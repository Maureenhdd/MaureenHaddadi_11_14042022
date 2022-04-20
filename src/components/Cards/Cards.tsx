import React from "react";
import { Link } from "react-router-dom";
import "./../../assets/scss/main.scss";
import styles from "./Cards.module.scss";

type Props = {
    img: string;
    title?: string;
    id?: string,
};
const Cards = ({ img, title, id }: Props) => {
    return (
        <Link
            to={`/housing/${id}`}
            className={styles.cards}
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.300), rgba(0, 0, 0, 0.300)), url(${img})`,
            }}
        >
            <div className={styles.cards_bottom}>
                <p className={styles.cards_title}>{title}</p>

            </div>
        </Link>
    );
};

export default Cards;
