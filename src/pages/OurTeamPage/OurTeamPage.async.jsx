import { lazy } from "react";

const OurTeamPageAsync = lazy(() => import("./OurTeamPage.jsx"));

export { OurTeamPageAsync as OurTeamPage };
