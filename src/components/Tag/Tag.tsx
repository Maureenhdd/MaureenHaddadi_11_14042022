import "./../../assets/scss/main.scss";
import styles from "./Tag.module.scss";

type Props = {
    text: string;
};


const Tag = ({ text }: Props) => {
    return (
        <div className={styles.tag}>
            <p className={styles.tag_content}>{text}</p>
        </div>
    );
};

export default Tag;
