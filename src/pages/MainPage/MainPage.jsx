import React from "react";
import HeroBlock from "../../components/Widgets/HeroBlock/HeroBlock";
import MediaBlock from "../../components/Widgets/MediaBlock/MediaBlock";
import WelcomeBlock from "../../components/Widgets/WelcomeBlock/WelcomeBlock.jsx";
// import InfoTableBlock from "../../components/Widgets/InfoTableBlock/InfoTableBlock.jsx";
// import PartnersBlock from "../../components/Widgets/PartnersBlock/PartnersBlock.jsx";
// import GalleryBlock from "../../components/Widgets/GalleryBlock/GalleryBlock.jsx";

const MainPage = () => {
    return (
        <div>
            <HeroBlock />
            <MediaBlock />
            <WelcomeBlock />
            {/* <InfoTableBlock />
            <PartnersBlock />
            <GalleryBlock /> */}
        </div>
    );
};

export default MainPage;
