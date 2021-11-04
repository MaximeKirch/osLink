import React, { useState } from 'react';
import '../App.css';
import '../styles/theme.css';
import { Button } from '../components/button/Button';
import Nav from '../components/Nav';
import Body from '../components/Body';
import HeroBanner from'../components/HeroBanner';
import Footer from '../components/Footer';
import Faq from '../components/Faq';
import ContactForm from '../components/ContactForm';
import ProjectSlider from '../components/ProjectSlider';
import Testimonials from '../components/Testimonials';

const Asso = () => {

    const [theme, setTheme] = useState('dark');
  const [isActive, setActive] = useState(false);


  const updateTheme =()=>{
    if (theme==='light') {
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  } 

  const toggleClass = () => {
    setActive(!isActive);
  };


  

  return (
    
        <div className="asso">
          <div className="appContent">

                <header className="appHeader">
                  <Nav />
                </header>
                <HeroBanner />

                <div className = {"App "+theme+" "+(isActive ? 'active': null)}>
                    
                    
                    <Button  /> 
                     
                      <div id="toggle" className = {(isActive ? 'active': null)} onClick={
                                () => {
                                        toggleClass();
                                        updateTheme()
                        }
                        }  label="Click Me">
                            <div id="toggle" className = "indicator">
                            </div>
                                                
                      </div>
                      <Body />

                      <ProjectSlider/>

                      <ContactForm />

                      <Testimonials/>

                      <Faq />
 
                </div>
                <Footer />
            

          </div>
        </div>
      
  );
};

export default Asso;