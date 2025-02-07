import React from "react";
import Header from "../../components/widgets/Header/Header.jsx";
import Hero from "../../components/widgets/Hero/Hero.jsx";
import WelcomeBlock from "../../components/widgets/WelcomeBlock/Welcome.jsx";
import InfoTableBlock from "../../components/widgets/InfoTableBlock/InfoTableBlock.jsx";
import Partners from "../../components/widgets/partners/Partners.jsx";
import Gallery from "../../components/widgets/Gallery/Gallery.jsx";
import Footer from "../../components/widgets/Footer/Footer.jsx";

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
