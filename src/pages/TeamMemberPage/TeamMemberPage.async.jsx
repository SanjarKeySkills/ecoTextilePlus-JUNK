import { lazy } from "react";

const TeamMemberPageAsync = lazy(() => import("./TeamMemberPage.jsx"));

export { TeamMemberPageAsync as TeamMemberPage };
