import React, { useState, useRef } from "react";
import styles from "./partnersBlock.module.scss";
import partnersLogo1 from "../../../assets/partners/cooldbros.png";
import partnersLogo2 from "../../../assets/partners/globalGarment.png";

const images = [partnersLogo1, partnersLogo2];

const PartnersSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current - touchEndX.current > 50) {
            nextSlide();
        } else if (touchStartX.current - touchEndX.current < -50) {
            prevSlide();
        }
    };

    return (
        <div className={styles.wrapperPartnersSlider}>
            <h2 className={styles.partnersSlider}>ПАРТНЕРЫ</h2>
            <div
                className={styles.slider}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}>
                <button onClick={prevSlide} className={styles.leftArrow}>
                    ❮
                </button>
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex}`}
                    className={styles.slide}
                />
                <button onClick={nextSlide} className={styles.rightArrow}>
                    ❯
                </button>
            </div>
        </div>
    );
};

export default PartnersSlider;
