import { lazy } from "react";

const TeamMemberPageAsync = lazy(() => import("./TeamMemberPage"));

export { TeamMemberPageAsync as TeamMemberPage };
