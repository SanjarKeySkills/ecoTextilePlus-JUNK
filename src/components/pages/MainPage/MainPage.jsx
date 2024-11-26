import React from "react";
import Header from "../../widgets/Header/Header.jsx";
import Hero from "../../widgets/Hero/Hero.jsx";
import WelcomeBlock from "../../widgets/WelcomeBlock/Welcome.jsx";
import InfoTableBlock from "../../widgets/InfoTableBlock/InfoTableBlock.jsx";
import Partners from "../../widgets/partners/Partners.jsx";
import Gallery from "../../widgets/Gallery/Gallery.jsx";
import Footer from "../../widgets/Footer/Footer.jsx";

const MainPage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <WelcomeBlock />
            <InfoTableBlock />
            <Partners />
            <Gallery />
            <Footer />
        </div>
    );
};

export default MainPage;
