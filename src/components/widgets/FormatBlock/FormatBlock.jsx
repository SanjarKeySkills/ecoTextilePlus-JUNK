import React from "react";
import styles from "./formatText.module.scss";

const FormatText = ({ text }) => {
    return (
        <div>
            {text.split("\n").map((line, index) => (
                <div key={index} className={styles.additionalSpace}>
                    {line.trim()}
                    {/* {line || <br />} */}
                    {/* Для пустых строк вставляем <br> */}
                </div>
            ))}
        </div>
    );
};

export default FormatText;
