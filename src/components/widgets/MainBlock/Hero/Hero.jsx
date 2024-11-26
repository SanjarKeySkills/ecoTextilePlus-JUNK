import React, { useEffect, useRef } from "react";
import styles from "./hero.module.css";
import videoBg from "../../../../assets/videoplayback.mp4";

const Hero = () => {
    const videoRef = useRef(null);
    useEffect(() => {
        videoRef.current.play();
    }, []);

    return (
        <div className={styles.hero}>
            <div className={styles.heroWrapper}>
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
                <div className={styles.heroManifest}>
                    <p>
                        ПЕРЕРАБОТКА ОТХОДОВ ШВЕЙНОЙ ОТРАСЛИ НАША ПРИОРИТЕТНАЯ
                        ЗАДАЧА ДОВЕРЯЙТЕ ПЕРЕРАБОТКУ ПРОФЕССИОНАЛАМ
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
