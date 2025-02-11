import React from "react";
import styles from "./footer.module.scss";
// import logoFooter from "../../../assets/logoFooter.png";
// import instLogo from "../../../assets/social/instagram-logo.svg";
// import facebookLogo from "../../../assets/social/facebook-logo.svg";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerWrapper}>
                <div className={styles.footerContacts}>
                    {/* <img
                        src={logoFooter}
                        alt="Footer Logo"
                        className={styles.footerLogo}
                    /> */}
                    <p>
                        Кыргызская Республика г.Бишкек <br /> <br />
                        ул.Ахунбаева 169, 2 этаж, кабинет 1
                    </p>
                    <p>
                        +996 552 702 740
                        <br />
                        <br />
                        <a
                            href="askatmazhitov@gmail.com"
                            className={styles.email}>
                            askatmazhitov@gmail.com
                        </a>
                    </p>
                </div>
                {/* <div className={styles.footerList}>
                    <ul>
                        <li>
                            <a href="/">О КОМПАНИИ</a>
                        </li>
                        <li>
                            <a href="/contacts">КОНТАКТЫ</a>
                        </li>
                    </ul>
                </div> */}
                <div className={styles.footerInfo}>
                    <p>Все права защищены.</p>
                    <p>
                        ОсОО "Ду Кастомс" является профессиональной
                        организацией, объединяющей квалифицированных экспертов в
                        области переработки отходов швейной отрасли, устойчивого
                        развития, зеленой экономики национального и
                        международного уровня.
                    </p>
                    <div className={styles.footerSocial}>
                        {/* <a href="*">
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
                        </a> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
