import { lazy } from "react";

const MainPageAsync = lazy(() => import("./MainPage.jsx"));

export { MainPageAsync as MainPage };
