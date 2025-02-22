import React, { useEffect, useRef } from "react";
import styles from "./hero.module.scss";
import imageTop from "../../../assets/bannerAnnoncement_kd.png";
import videoBg from "../../../assets/videoplayback.mp4";

const Hero = () => {
    const videoRef = useRef(null);
    useEffect(() => {
        videoRef.current.play();
    }, []);

    return (
        <div className={styles.hero}>
            <div className={styles.heroWrapper}>
                <div className={styles.heroTop}>
                    <div className={styles.heroTopImg}>
                        <img src={imageTop} alt="heroTopImage" />
                    </div>
                </div>
                <div className={styles.heroContainer}>
                    <div className={styles.heroContent}>
                        Основатель проекта - ОсОО "Ду Кастомс", которая является
                        лидером в области переработки отходов швейной отрасли.{" "}
                        <br /> <br />
                        Мы стремимся предложить инновационные и экологически
                        безопасные решения для переработки текстильных отходов,
                        превращая их в полезные материалы, которые могут быть
                        использованы повторно. <br /> <br />
                        Этот проект направлен на улучшение экологической
                        ситуации, снижение смога в городах и уменьшение
                        воздействия на окружающую среду, обеспечивая будущее без
                        отходов.
                    </div>
                    <video src={videoBg} loop muted ref={videoRef}></video>
                </div>
                <div>
                    <p className={styles.heroManifest}>
                        ПЕРЕРАБОТКА ОТХОДОВ ШВЕЙНОЙ ОТРАСЛИ НАША ПРИОРИТЕТНАЯ
                        ЗАДАЧА. <br />
                        ДОВЕРЯЙТЕ ПЕРЕРАБОТКУ ПРОФЕССИОНАЛАМ
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
