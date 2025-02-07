import React from "react";
import Header from "./index.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./index.jsx";

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
