import React, { useEffect, useRef } from "react";
import styles from "./mediaBlock.module.scss";
import videoBg from "../../../assets/videoplayback.mp4";

const MediaBlock = () => {
    const videoRef = useRef(null);
    useEffect(() => {
        videoRef.current.play();
    }, []);

    return (
        <div className={styles.mediaBlock}>
            <div className={styles.mediaContainer}>
                <div className={styles.mediaContent}>
                    <p className={styles.mediaText}>
                        Компания "ECOTEXTILEPLUS" - лидер в области переработки
                        отходов швейной отрасли.
                        <br /> <br />
                        Мы стремимся предложить инновационные и экологически
                        безопасные решения для переработки текстильных отходов в
                        востребованные товары хозяйственного и бытового
                        назначения.
                        <br /> <br />
                        Проект направлен на улучшение экологической ситуации,
                        снижение объема сжигания отходов швейной отрасли и
                        ветоши и уменьшение воздействия на окружающую среду,
                        обеспечивая будущее без отходов.
                    </p>
                </div>
                <video
                    src={videoBg}
                    loop
                    muted
                    ref={videoRef}
                    className={styles.videoBlock}></video>
            </div>
            <div className={styles.manifestBlock}>
                <p className={styles.heroManifest}>
                    ПЕРЕРАБОТКА ОТХОДОВ ШВЕЙНОЙ ОТРАСЛИ НАША ПРИОРИТЕТНАЯ
                    ЗАДАЧА. <br />
                    ДОВЕРЯЙТЕ ПЕРЕРАБОТКУ ПРОФЕССИОНАЛАМ
                </p>
            </div>
        </div>
    );
};

export default MediaBlock;
