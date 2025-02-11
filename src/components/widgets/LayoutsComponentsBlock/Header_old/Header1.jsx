import React from "react";
import styles from "./header.module.scss";
import logo from "../../../../assets/ecotextile_logo.png";
import burgerButton from "../../../../assets/ui/burgerBtn.svg";
import arrowPopUp from "../../../../assets/ui/arrowBtn.svg";
import { useState } from "react";

const Header = () => {
    const [isOpenPopUp, setOpenPopUp] = useState("none");

    const [isPndMenuOpen, setPndMenuOpen] = useState(false);
    const togglePopUp = () => {
        setOpenPopUp((prev) => (prev === "none" ? "block" : "none"));
    };
    const togglePndMenu = () => {
        setPndMenuOpen((prev) => !prev);
    };
    const changeStyle = () => {
        if (isOpenPopUp === "none") {
            setOpenPopUp("block");
        } else setOpenPopUp("none");
    };

    return (
        <div className={styles.header}>
            <div className={styles.headerWrapper}>
                {/* <img src={logo} alt="main" className={styles.logoHeader} /> */}
                <div className={styles.headerInfo}>
                    <p className={styles.headerText}>
                        Снижая нагрузку на окружающую среду через эффективные
                        решения по переработки тканей без сжигания, производим
                        востребованный и ценный продукт.
                        <br />
                        <br />
                        Миссия компании ОсОО "Ду Кастомс" - внедрение
                        экологически чистых технологий по переработке отходов
                        швейной отрасли.
                    </p>
                    <div className={styles.headerInfoBtns}>
                        <a className={styles.headerButton} href="/contact">
                            СВЯЗАТЬСЯ С НАМИ
                        </a>
                        <div className={styles.lanBtnWraper}>
                            <a href="/" className={styles.lanRu}>
                                RU
                            </a>
                            <a href="#" className={styles.lanEn}>
                                EN
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Modile */}
            <div className={styles.headerMobile}>
                <a href="/">
                    <img
                        src={logo}
                        alt="main"
                        className={styles.logoHeaderPoPup}
                    />
                </a>
                <img src={burgerButton} alt="burger" onClick={changeStyle} />
                {/* Container PopUp */}
                <div
                    className={styles.containerPopUp}
                    style={{ display: isOpenPopUp }}>
                    <div className={styles.wrapperPopUp}>
                        <div className={styles.arrowWrapper}>
                            <img
                                src={arrowPopUp}
                                alt="arrow"
                                onClick={changeStyle}
                            />
                        </div>
                        <p>
                            Кыргызская Республика <br />
                            <br /> г.Бишкек ул. Ахунбаева 169
                            <br />
                            <br /> 2 этаж, кабинет 1
                        </p>
                        <p>
                            +996 552 702 740
                            <tr />
                        </p>
                        <a href="#">askatmazhitov@gmail.com</a>
                        <a className={styles.headerButton} href="/contact">
                            СВЯЗАТЬСЯ С НАМИ
                        </a>
                        <div className={styles.lans}>
                            <a href="/" className={styles.lanRu}>
                                RU
                            </a>
                            <a href="/" className={styles.lanEn}>
                                EN
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
