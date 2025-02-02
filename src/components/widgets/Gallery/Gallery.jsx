import React from "react";
import styles from "./gallery.module.scss";
import img1 from "../../../assets/gallery/img1.png";
import img2 from "../../../assets/gallery/img2.png";
import img3 from "../../../assets/gallery/img3.png";
import img4 from "../../../assets/gallery/img4.png";
import img5 from "../../../assets/gallery/img5.png";
import img6 from "../../../assets/gallery/img6.png";

const Gallery = () => {
    return (
        <>
            <div className={styles.gallery}>
                <div className={styles.imgList}>
                    <img src={img1} alt="img1" />
                    <img src={img2} alt="img2" />
                    <img src={img3} alt="img3" />
                    <img src={img4} alt="img4" />
                    <img src={img5} alt="img5" />
                    <img src={img6} alt="img6" />
                </div>
            </div>
        </>
    );
};

export default Gallery;
