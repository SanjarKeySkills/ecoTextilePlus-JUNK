import React from "react";
import styles from "./missionBlock.module.scss";

const MissionBlock = () => {
    return (
        <div className={styles.missionBlock}>
            <div className={styles.missionContainer}>
                <div className={styles.profileWrapper}>
                    <div className={styles.profileContent}>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissionBlock;
