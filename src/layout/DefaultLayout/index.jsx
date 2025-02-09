import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Widgets/LayoutsComponentsBlock/Header/Header.jsx";
import Footer from "../../components/Widgets/LayoutsComponentsBlock/Footer/Footer.jsx";
import styles from "./index.module.scss";

export const ContentFallback = () => <div className={styles.loader}></div>;

const DefaultLayout = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.content}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default DefaultLayout;
