import React from "react";
import styles from "./footer.module.css";
import logo from "../../../assets/ecotextile_logo.png";
import instLogo from "../../../assets/social/instagram-logo.svg";
import facebookLogo from "../../../assets/social/facebook-logo.svg";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerWrapper}>
                <div className={styles.footerContacts}>
                    <img
                        src={logo}
                        alt="Footer Logo"
                        className={styles.footerLogo}
                    />
                    <p>
                        Кыргызская Республика г.Бишкек ул.Ахунбаева 169, 6 этаж,
                        кабинет 10
                    </p>
                    <p>
                        +996 552 702 740
                        <tr />
                        <a href="#">askatmazhitov@gmail.com</a>
                    </p>
                </div>
                <div className={styles.footerList}>
                    <ul>
                        <li>
                            <a href="/">О КОМПАНИИ</a>
                        </li>
                        <li>
                            <a href="/contacts">КОНТАКТЫ</a>
                        </li>
                    </ul>
                </div>
                <div className={styles.footerInfo}>
                    <span>Все права защищены.</span>
                    <p>
                        ОсОО "Ду Кастомс" является профессиональной
                        организацией, объединяющей квалифицированных экспертов в
                        области переработки отходов швейной отрасли, устойчивого
                        развития, зеленой экономики национального и
                        международного уровня.
                    </p>
                    <div className={styles.footerSocial}>
                        <a href="*">
                            <img
                                src={instLogo}
                                alt="Instagram"
                                className={styles.socialLogo}
                            />
                        </a>
                        <a href="*">
                            <img
                                src={facebookLogo}
                                alt="Facebook"
                                className={styles.socialLogo}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
