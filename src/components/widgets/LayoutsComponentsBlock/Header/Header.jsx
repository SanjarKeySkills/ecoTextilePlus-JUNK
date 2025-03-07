import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";
import logo from "../../../../assets/ecotextile_logo.png";
import burgerButton from "../../../../assets/ui/burgerBtn.svg";
import arrowPopUp from "../../../../assets/ui/arrowBtn.svg";

const arrLinks = [
    { to: "/", label: "ГЛАВНАЯ" },
    { to: "/mission", label: "МИССИЯ" },
    { to: "/team", label: "КОМАНДА" },
    { to: "/gallery", label: "ГАЛЕРЕЯ" },
    { to: "/vacancy", label: "ВАКАНСИИ" },
    { to: "/contacts", label: "КОНТАКТЫ" },
];
const arrLan = [
    { id: 1, to: "/kg", label: "KG" },
    { id: 2, to: "/en", label: "EN" },
    { id: 3, to: "/ru", label: "RU" },
];
const arrForRecycle = [
    { id: 121, to: "#", label: "ХЛОПОК" },
    { id: 122, to: "#", label: "ПОЛИЭСТЕР" },
    { id: 123, to: "#", label: "ШЕРСТЬ" },
    { id: 124, to: "#", label: "ЛЕН" },
    { id: 125, to: "#", label: "НЕЙЛОН" },
    { id: 126, to: "#", label: "ВИСКОЗА" },
    { id: 127, to: "#", label: "СПАНДЕКС (ЭЛАСТАН)" },
    { id: 128, to: "#", label: "ДЕНИМ (ДЖИНСОВАЯ ТКАНЬ)" },
    { id: 129, to: "#", label: "АКРИЛ" },
];
const arrForProduct = [
    { id: 131, to: "#", label: "УТЕПЛИТЕЛИ" },
    { id: 132, to: "#", label: "БАЗАЛЬТОВЫЙ УТЕПЛИТЕЛЬ" },
    { id: 133, to: "#", label: "СТРОИТЕЛЬНЫЕ ПЕРЧАТКИ" },
    { id: 134, to: "#", label: "ТЕХНИЧЕСКИЕ ТКАНИ" },
];

// Header Desctop menu
const Header = () => {
    const [isOpenPopUp, setOpenPopUp] = useState(false);
    const togglePopup = () => setOpenPopUp(!isOpenPopUp);
    return (
        <div className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.headerUp}>
                    <Link to="/">
                        <img
                            src={logo}
                            alt="main"
                            className={styles.headerLogo}
                        />
                    </Link>
                    <div className={styles.listNavbarWrapper}>
                        <ul>
                            {arrLinks.map((link) => (
                                <li key={link.id}>
                                    <Link to={link.to} className={styles.link}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.lansDesctop}>
                        {arrLan.map((link) => (
                            <div className={styles.lan}>{link.label}</div>
                            // <div key={link.id}>
                            //     <Link to={link.to} className={styles.lan}>
                            //         {link.label}
                            //     </Link>
                            // </div>
                        ))}
                    </div>
                </div>

                {/* Header bottom */}
                <div className={styles.headerBottom}>
                    <div className={styles.dropdown}>
                        <Link className={styles.dropdownButton}>
                            ЧТО ПЕРЕРАБАТЫВАЕМ
                        </Link>
                        <div className={styles.dropdownContent}>
                            {arrForRecycle.map((link) => (
                                <div key={link.id}>
                                    <Link
                                        key={link.to}
                                        className={styles.dropdownLink}>
                                        {link.label}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.dropdown}>
                        <Link className={styles.dropdownButton}>
                            ЧТО ПРОИЗВОДИМ
                        </Link>
                        <div className={styles.dropdownContent}>
                            {arrForProduct.map((link) => (
                                <div key={link.id}>
                                    <Link
                                        key={link.to}
                                        className={styles.dropdownLink}>
                                        {link.label}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile responcive menu */}
            <div className={styles.headerMobile}>
                <div className={styles.headerMobileWrapper}>
                    <Link to="/">
                        <img
                            src={logo}
                            alt="main"
                            onClick={togglePopup}
                            className={styles.headerLogo}
                        />
                    </Link>
                    <img
                        src={burgerButton}
                        alt="burger"
                        onClick={togglePopup}
                        className={styles.burgerBtn}
                    />
                    <HeaderMobileMenu
                        isOpenPopUp={isOpenPopUp}
                        togglePopup={togglePopup}
                    />
                </div>
            </div>
        </div>
    );
};
export default Header;

// Header popUp
const HeaderMobileMenu = (props) => {
    const { isOpenPopUp, togglePopup } = props;
    const handlePopUpLinkClick = () => togglePopup(); // Закрытие адаптивного popUp меню
    return (
        <div
            className={styles.popUpMobile}
            style={{ display: isOpenPopUp ? "block" : "none" }}>
            <div className={styles.wrapperPopUp}>
                <img
                    src={arrowPopUp}
                    alt="arrow"
                    onClick={togglePopup}
                    className={styles.arrowPopupImg}
                />
                <ul className={styles.listNavbarPopUp}>
                    {arrLinks.map((link) => (
                        <li key={link.id}>
                            <Link
                                to={link.to}
                                onClick={handlePopUpLinkClick}
                                className={styles.link}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className={styles.listLanPopUp}>
                    {arrLan.map((link) => (
                        <li key={link.id}>
                            <Link
                                to={link.to}
                                onClick={handlePopUpLinkClick}
                                className={styles.lan}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.popUpListContainer}>
                <div className={styles.popUpListWrapper}>
                    <p>ЧТО ПЕРЕРАБАТЫВАЕМ</p>
                    <div className={styles.popUpList}>
                        {arrForRecycle.map((link) => (
                            <div key={link.id}>
                                <Link key={link.to} className={styles.link}>
                                    {link.label}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.popUpListWrapper}>
                    <p>ЧТО ПРОИЗВОДИМ</p>
                    <div className={styles.popUpList}>
                        {arrForProduct.map((link) => (
                            <div key={link.id}>
                                <Link key={link.to} className={styles.link}>
                                    {link.label}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
