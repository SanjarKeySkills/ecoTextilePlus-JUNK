import React from "react";
import styles from "./headerBlock.module.css";
import logo from "../../../assets/ecotextile_logo.png";
import burgerButton from "../../../assets/uIelements/burgerButton.svg";
import arrowPopUp from "../../../assets/uIelements/arrowPopUp.svg";
import { useState } from "react";

const Header = () => {
    const [isOpenPopUp, setOpenPopUp] = useState("none");
    const [isPndMenuOpen, setPndMenuOpen] = useState(false);
    // const togglePopUp = () => {
    //     setOpenPopUp((prev) => (prev === "none" ? "block" : "none"));
    // };
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
                        Миссия компании ОсОО "Ду Кастомс" заключается в
                        разработке и внедрении экологически чистых технологий
                        переработки отходов швейной отрасли. Мы стремимся
                        снизить нагрузку на окружающую среду, предлагая
                        эффективные решения для переработки тканей без сжигания,
                        превращая их в полезные и востребованные материалы.
                    </p>
                    {/* <li className={styles.dropdown}>
                        <button
                            className={styles.dropdownButton}
                            onClick={togglePndMenu}>
                            О КОМПАНИИ
                        </button>



                        {isPndMenuOpen && (
                            <ul className={styles.dropdownMenu}>
                               
                            </ul>
                        )}
                    </li> */}
                    {/* <ul className={styles.headerList}>
                        <li>
                            <a href="/about" className={styles.navLink}>
                                МИССИЯ
                            </a>
                        </li>
                        <li>
                            <a href="/services" className={styles.navLink}>
                                УСЛУГИ
                            </a>
                        </li>

                        <li>
                            <a href="/contact" className={styles.navLink}>
                                КОНТАКТЫ
                            </a>
                        </li>
                    </ul> */}
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
                        {/* <a href="#" className={styles.lanRu}>
                                KG
                            </a> */}
                    </div>
                </div>
            </div>
            <div className={styles.headerMobile}>
                <a href="/">
                    <img src={logo} alt="main" />
                </a>
                <img src={burgerButton} alt="burger" onClick={changeStyle} />
                <div
                    className={styles.containerPopUp}
                    style={{ display: isOpenPopUp }}>
                    <div className={styles.wrapperTopPopUp}>
                        <div className={styles.arrowWrapper}>
                            <img
                                src={arrowPopUp}
                                alt="arrow"
                                onClick={changeStyle}
                            />
                        </div>
                        <ul className={styles.listTopPopUp}>
                            <li>
                                <a href="/">НА ГЛАВНУЮ</a>
                            </li>
                            <li>
                                <a href="/articles" className={styles.link}>
                                    ПУБЛИКАЦИИ
                                </a>
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
                    </div>
                    <div className={styles.headerBottomPopUp}>
                        <ul className={styles.listBottomPopUp}></ul>
                        <div>
                            <a href="/" className={styles.lanRu}>
                                RU
                            </a>
                            <a href="#" className={styles.lanEn}>
                                EN
                            </a>
                            {/* <a href="#" className={styles.lanRu}>
                                KG
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
