import { lazy } from "react";

const ErrorPageAsync = lazy(() => import("./ErrorPage.jsx"));

export { ErrorPageAsync as ErrorPage };
