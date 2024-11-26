import React from "react";
import Header from "../../widgets/HeaderBlock/Header.jsx";
import Hero from "../../widgets/MainBlock/Hero/Hero.jsx";
import WelcomeBlock from "../../widgets/WelcomeBlock/WelcomeBlock.jsx";
import InfoTableBlock from "../../widgets/InfoTableBlock/InfoTableBlock.jsx";
import Partners from "../../widgets/partners/Partners.jsx";
// import Footer from "../../widgets/FooterBlock/Footer.jsx";

const MainPage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <WelcomeBlock />
            <InfoTableBlock />
            <Partners />
            {/* <Footer /> */}
        </div>
    );
};

export default MainPage;
