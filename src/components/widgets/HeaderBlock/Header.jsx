import React from "react";
import styles from "./headerBlock.module.css";
import logo from "../../../assets/ecotextile_logo.png";
import burgerButton from "../../../assets/uIelements/burgerButton.svg";
import arrowPopUp from "../../../assets/uIelements/arrowPopUp.svg";
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
                <img src={logo} alt="main" className={styles.logoHeader} />
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
                <a href="/" className={styles.logoHeader}>
                    <img src={logo} alt="main" />
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
                        <ul className={styles.listPopUp}>
                            <li>
                                <a href="/">НА ГЛАВНУЮ</a>
                            </li>
                            <li>
                                <a href="/gallery" className={styles.link}>
                                    ГАЛЛЕРЕЯ
                                </a>
                            </li>
                            <li>
                                <a href="/services" className={styles.link}>
                                    УСЛУГИ
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className={styles.link}>
                                    КОНТАКТЫ
                                </a>
                            </li>
                        </ul>
                        <a className={styles.buttonHero} href="/contact">
                            СВЯЗАТЬСЯ С НАМИ
                        </a>
                        <div className={styles.lans}>
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
        </div>
    );
};

export default Header;
