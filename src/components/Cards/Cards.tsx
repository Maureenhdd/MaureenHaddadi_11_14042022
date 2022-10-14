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
                backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${img})`,
            }}
        >
            <p className={styles.cards_title}>{title}</p>

        </Link>
    );
};

export default Cards;
