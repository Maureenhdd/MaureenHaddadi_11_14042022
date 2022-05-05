import React, { ReactNode } from "react";
import "./../../assets/scss/main.scss";
import styles from "./Tag.module.scss";
import { useState } from "react";

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
