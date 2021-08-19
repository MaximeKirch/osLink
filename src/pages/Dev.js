import React from 'react';
import Nav from '../components/Nav';
import Body from '../components/Body';
import HeroBanner from'../components/HeroBanner';
import Footer from '../components/Footer';
import Faq from '../components/Faq';
import Search from '../components/Search';


const Dev = () => {
    return (
        <div className="dev">

            <div className="appContent">

                <header className="appHeader">

                    <Nav />

                </header>

                <HeroBanner />

                <Body />

                <Search />

                <Faq />


            </div>

        <Footer />

        </div>

    );
};

export default Dev;