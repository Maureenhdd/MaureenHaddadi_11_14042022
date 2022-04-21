import React from "react";
import "./../../assets/scss/main.scss";
import styles from "./Accordion.module.scss";
import { useState } from "react";

type Props = {
    title: string;
    text: string;
    id: number; 
};
const Accordion = ({ text, title , id}: Props) => {
    const [active, setActive] = useState(false)
    return (
        <>
            <div className={styles.accordion} key={id}>
                <div className={styles.accordion_top}><h2>{title} </h2>
                    {
                        active ? <button onClick={() => {
                            setActive(false)
                        }}>-</button> :
                            <button onClick={() => {
                                setActive(true)
                            }}>+</button>
                    }
                </div>

                <div className={`${styles.accordion_content} ${active ? styles.accordion_active : styles.accordion_hidden}`}>
                    <p>{text}</p>
                </div>
            </div>

        </>
    );
};

export default Accordion;
