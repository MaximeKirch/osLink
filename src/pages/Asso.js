import React from 'react';
import Nav from '../components/Nav';
import Body from '../components/Body';
import HeroBanner from'../components/HeroBanner';
import Footer from '../components/Footer';
import Faq from '../components/Faq';
import ContactForm from '../components/ContactForm';


const Asso = () => {
    return (
        <div className="asso">

        <div className="appContent">

            <header className="appHeader">

                <Nav />

            </header>

            <HeroBanner />

            <Body />

            <ContactForm />

            <Faq />


        </div>

    <Footer />

    </div>

    );
};

export default Asso;