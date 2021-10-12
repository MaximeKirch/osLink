import React from 'react';
 import Nav from '../components/Nav';
import Body from '../components/Body';
import HeroBanner from'../components/HeroBanner';
import Footer from '../components/Footer';
import Faq from '../components/Faq'; 
import ModalLogic from '../components/ModalLogic';
import ModalWindow2 from '../components/Modalwindows2';

const Home = () => {

    // Ici j'appelle mes constantes pour ma logique modale
    
    const {open, toggle} = ModalLogic();

    return (

        <div  className="home" >

            <div className="appContent">

                <header className="appHeader">

                    <Nav />
          
                </header>

                <HeroBanner />

                <Body />

            {/* //Ici on appelle la fenêtre modale */} 
            
                <ModalWindow2
                open={open}
                hide={toggle}
                />

                {/* <Faq /> */}
  

            </div>
        

        <Footer />

        </div>
            
    );
};

export default Home;