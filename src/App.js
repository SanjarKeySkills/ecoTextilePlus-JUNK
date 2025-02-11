import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import DefaultLayout, { ContentFallback } from "./layout/DefaultLayout";
import { MainPage } from "./pages/MainPage/MainPage.async.jsx";
// import { ErrorPage } from "./pages/ErrorPage/ErrorPage.async.jsx";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route
                        index
                        element={
                            <Suspense fallback={<ContentFallback />}>
                                <MainPage />
                            </Suspense>
                        }
                    />
                    {/* <Route
                        index
                        element={
                            <Suspense fallback={<ContentFallback />}>
                                <OurTeam />
                            </Suspense>
                        }
                    /> */}
                    {/* <Route
                        path="*"
                        element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <ErrorPage />
                            </Suspense>
                        }
                    /> */}
                </Route>
            </Routes>
        </>
    );
};
export default App;
