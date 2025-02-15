import { lazy } from "react";

const GalleryPageAsync = lazy(() => import("./GalleryPage.jsx"));

export { GalleryPageAsync as GalleryPage };
