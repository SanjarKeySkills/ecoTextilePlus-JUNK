// import React, { Suspense, lazy } from "react";
import React from "react";
// import { Routes, Route } from "react-router-dom";
// import DefaultLayout from "./components/layout/index.jsx";
import { MainPage } from "./components/pages/MainPage/MainPage.async.jsx";

const App = () => {
    return (
        <>
            <div>
                <MainPage />
            </div>
        </>
    );
};
export default App;
