import React from "react";
import styles from "./footer.module.scss";

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerWrapper}>
                <div className={styles.footerContacts}>
                    <img
                        src={footerLogo}
                        alt="Footer Logo"
                        className={styles.footerLogo}
                    />
                    <p>
                        Кыргызская Республика г.Бишкек ул.Исанова 105/1, 6 этаж,
                        кабинет 2
                    </p>
                    <p>
                        +996 (555) 888-242
                        <br />
                        <a href="#">kned.org@gmail.com</a>
                    </p>
                </div>
                <div className={styles.footerList}>
                    <ul>
                        <li>
                            <Link to="/about">О ПАЛАТЕ</Link>
                        </li>
                        <li>
                            <Link to="/members">ЧЛЕНЫ ПАЛАТЫ</Link>
                        </li>
                        <li>
                            <Link to="/services">УСЛУГИ</Link>
                        </li>
                        <li>
                            <Link to="/contact">КОНТАКТЫ</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to="/courses">КУРСЫ И ТРЕНИНГИ</Link>
                        </li>
                        <li>
                            <Link to="/news">НОВОСТИ</Link>
                        </li>
                        <li>
                            <Link to="/articles">СТАТЬИ</Link>
                        </li>
                        <li>
                            <Link to="/gallery">ГАЛЛЕРЕЯ</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.footerInfo}>
                    <p>
                        Do Customs является профессиональной организацией,
                        добровольно объединяющей физических лиц, в лице
                        национальных и международных независимых директоров и
                        экспертов в области корпоративного управления.
                    </p>
                    <div className={styles.footerSocial}>
                        <Link to="#">
                            <img
                                src={instLogo}
                                alt="Instagram"
                                className={styles.socialLogo}
                            />
                        </Link>
                        <Link to="#">
                            <img
                                src={facebookLogo}
                                alt="Facebook"
                                className={styles.socialLogo}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
