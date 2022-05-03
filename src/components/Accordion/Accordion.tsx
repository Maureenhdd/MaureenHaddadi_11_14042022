import React, { ReactNode } from "react";
import "./../../assets/scss/main.scss";
import styles from "./Accordion.module.scss";
import { useState } from "react";

type Props = {
    title: string;
    text: string | ReactNode;
    id?: number;
    list? : string[]
};


const Accordion = ({ text, title, id, list}: Props) => {
    const [active, setActive] = useState(false)
    return (
        <>
            <div className={styles.accordion} key={id}>
                <div className={styles.accordion_top}><p>{title} </p>
                    {
                        active ? <button className={styles.accordion_btn} onClick={() => {
                            setActive(false)
                        }}><i className={`fa-solid fa-chevron-down ${styles.i_active} ${styles.i_btn}`}></i></button> :
                            <button className={styles.accordion_btn} onClick={() => {
                                setActive(true)
                            }}><i className={`fa-solid fa-chevron-down  ${styles.i_btn}`}></i></button>
                    }
                </div>

                <div className={`${styles.accordion_content} ${active ? styles.accordion_active : styles.accordion_hidden}`}>
                   {typeof text === 'string' ? <p>{text}</p>  : <ul>{text}</ul>}
                </div>
            </div>

        </>
    );
};

export default Accordion;
