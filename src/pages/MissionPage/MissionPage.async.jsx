import { lazy } from "react";

const MissionPageAsync = lazy(() => import("./MissionPage.jsx"));

export { MissionPageAsync as MissionPage };
