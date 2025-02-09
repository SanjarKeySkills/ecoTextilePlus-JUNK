import React from "react";
import WelcomeBlock from "../../components/widgets/WelcomeBlock/Welcome.jsx";
import InfoTableBlock from "../../components/widgets/InfoTableBlock/InfoTableBlock.jsx";
import Partners from "../../components/widgets/partners/Partners.jsx";
import Gallery from "../../components/widgets/Gallery/Gallery.jsx";

const MainPage = () => {
    return (
        <div>
            <WelcomeBlock />
            <InfoTableBlock />
            <Partners />
            <Gallery />
        </div>
    );
};

export default MainPage;
