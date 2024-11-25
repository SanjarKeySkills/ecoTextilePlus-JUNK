import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../HeaderBlock/Header.jsx";
import Footer from "../FooterBlock/Footer.jsx";

const DefaultLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};
export default DefaultLayout;
