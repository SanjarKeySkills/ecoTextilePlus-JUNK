import React from "react";
import styles from "./hero.module.scss";
import imageTop from "../../../assets/gallery/heroTop.png";

const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.heroWrapper}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroImg}>
                        <img src={imageTop} alt="heroTopImage" />
                    </div>
                    <div className={styles.heroTitle}>
                        ЭФФЕКТИВНАЯ <br />
                        Переработка отходов швейной отрасли
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
