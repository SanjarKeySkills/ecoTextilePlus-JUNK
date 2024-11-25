import React from "react";
import Header from "../../components/layout/index.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../../components/layout/index.jsx";

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
