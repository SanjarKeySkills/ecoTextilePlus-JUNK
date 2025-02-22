import { lazy } from "react";

const VacancyPageAsync = lazy(() => import("./VacancyPage.jsx"));

export { VacancyPageAsync as VacancyPage };
