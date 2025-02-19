import React from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import logo from "../../../../assets/ecotextile_logo.png";
import burgerButton from "../../../../assets/ui/burgerBtn.svg";
import arrowPopUp from "../../../../assets/ui/arrowBtn.svg";
import { useState } from "react";

const arrLinks = [
    { to: "/", label: "ГЛАВНАЯ" },
    { to: "/mission", label: "МИССИЯ" },
    { to: "/team", label: "КОМАНДА" },
    { to: "/gallery", label: "ГАЛЕРЕЯ" },
    { to: "/gallery", label: "ВАКАНСИИ" },
    { to: "/contacts", label: "КОНТАКТЫ" },
];
const arrLan = [
    { to: "/", label: "KG" },
    { to: "/", label: "EN" },
    { to: "/", label: "RU" },
];
const arrForRecycle = [
    { to: "/", label: "СИНТЕТИКА" },
    { to: "/", label: "ХЛОПЧАТОБУМАЖНАЯ ТКАНЬ" },
    { to: "/", label: "ПОЛИСТЕР" },
    { to: "/", label: "ТРИКОТАЖ" },
];
const arrForProduct = [
    { to: "/", label: "УТЕПЛИТЕЛИ" },
    { to: "/", label: "ПАНЕЛИ УТЕПЛИТЕЛИ" },
    { to: "/", label: "СТРОИТЕЛЬНЫЕ ПЕРЧАТКИ" },
    { to: "/", label: "ТЕХНИЧЕСКИЕ ТКАНИ" },
];

const Header = () => {
    const [isOpenPopUp, setOpenPopUp] = useState("none");
    const [isPndMenuOpen, setPndMenuOpen] = useState(false);
    const togglePopUp = () => {
        setOpenPopUp((prev) => (prev === "none" ? "block" : "none"));
    };
    const changeStyle = () => {
        if (isOpenPopUp === "none") {
            setOpenPopUp("block");
        } else setOpenPopUp("none");
    };

    return (
        <div className={styles.header}>
            <div className={styles.headerContaner}>
                <div className={styles.headerUp}>
                    <a href="/">
                        <img
                            src={logo}
                            alt="main"
                            className={styles.logoHeader}
                        />
                    </a>
                    <div className={styles.listNavbarWrapper}>
                        <ul className={styles.listNavbar}>
                            {arrLinks.map((link) => (
                                <li key={link.to}>
                                    <Link to={link.to} className={styles.link}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.lans}>
                        {arrLan.map((link) => (
                            <div key={link.to}>
                                <Link to={link.to} className={styles.lan}>
                                    {link.label}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.headerBottom}>
                    <div className={styles.dropdown}>
                        <Link className={styles.dropdownButton}>
                            МЫ ПЕРЕРАБАТЫВАЕМ
                        </Link>
                        <div className={styles.dropdownContentResponcive}>
                            {arrForRecycle.map((link) => (
                                <Link
                                    key={link.to}
                                    className={styles.listLinkResponcive}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                        <div className={styles.dropdownContent}>
                            {arrForRecycle.map((link) => (
                                <Link
                                    key={link.to}
                                    className={styles.dropdownLink}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className={styles.dropdown}>
                        <Link className={styles.dropdownButton}>
                            МЫ ПРОИЗВОДИМ
                        </Link>
                        <div className={styles.dropdownContentResponcive}>
                            {arrForProduct.map((link) => (
                                <Link
                                    key={link.to}
                                    className={styles.listLinkResponcive}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                        <div className={styles.dropdownContent}>
                            {arrForProduct.map((link) => (
                                <Link
                                    key={link.to}
                                    className={styles.dropdownLink}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.contacts}>
                    <p>
                        Кыргызская Республика <br />
                        г.Бишкек ул. Ахунбаева 169 <br />7 этаж, кабинет 1
                    </p>
                    <p>
                        +996 552 702 740 <tr />
                    </p>
                    <a href="/">askatmazhitov@gmail.com</a>
                    <a href="/contact" className={styles.contactBtn}>
                        СВЯЗАТЬСЯ С НАМИ
                    </a>
                </div>
            </div>
        </div>
    );
};

/* Modile */
// {/* <div className={styles.headerMobile}>
//     <img src={burgerButton} alt="burger" onClick={changeStyle} />
//     {/* Container PopUp */}
//     <div className={styles.containerPopUp} style={{ display: isOpenPopUp }}>
//         <div className={styles.wrapperPopUp}>
//             <div className={styles.arrowWrapper}>
//                 <img src={arrowPopUp} alt="arrow" onClick={changeStyle} />
//             </div>
//         </div>
// Миссия компании ОсОО "Ду Кастомс" - внедрение экологически
// чистых технологий по переработке отходов швейной отрасли.
//     </div>
// </div>;
//   <p className={styles.headerText}>
//       Снижая нагрузку на окружающую среду через эффективные решения по
//       переработки тканей без сжигания, производим востребованный и ценный
//       продукт.
//   </p>;
export default Header;
