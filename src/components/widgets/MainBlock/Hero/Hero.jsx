import React, { useEffect, useRef } from "react";
import styles from "./hero.module.css";
import videoBg from "../../../../assets/videoplayback.mp4";

const Hero = () => {
    const videoRef = useRef(null);
    useEffect(() => {
        videoRef.current.play();
    }, []);

    return (
        <div className={styles.mainHero}>
            <div className={styles.mainHeroWrapper}>
                <div className={styles.mainHeroContent}>
                    <span className={styles.heroText}>
                        ПЕРЕРАБОТКА ОТХОДОВ ШВЕЙНОЙ ОТРАСЛИ <br /> НАША
                        ПРИОРИТЕТНАЯ ЗАДАЧА
                    </span>
                    <span className={styles.heroText}>
                        ДОВЕРЯЙТЕ ПЕРЕРАБОТКУ ПРОФЕССИОНАЛАМ
                    </span>
                </div>
                <video src={videoBg} loop muted ref={videoRef}></video>
            </div>
        </div>
    );
};

export default Hero;
