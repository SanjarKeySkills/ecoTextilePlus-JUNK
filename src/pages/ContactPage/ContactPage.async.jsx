import { lazy } from "react";

const ContactPageAsync = lazy(() => import("./ContactPage.jsx"));

export { ContactPageAsync as ContactPage };
