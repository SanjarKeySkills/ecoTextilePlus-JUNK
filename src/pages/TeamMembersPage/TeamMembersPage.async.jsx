import { lazy } from "react";

const TeamMembersPageAsync = lazy(() => import("./TeamMembersPage.jsx"));

export { TeamMembersPageAsync as TeamMembersPage };
