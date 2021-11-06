import React from 'react'
import Man from '../assets/man.png'
import '../App.css'

function Testimonials() {

    return(
        <>
            <div className='testimonialMain'>

                <div className='testimonialContainer'>
           
                    <div>
                    <p className='testimonialText'>The most important part of the Startup Framework are the testimonials. Testimonials are a part of serious and confidence
                        for the Startup.</p>
                    </div>
                    
                    <div className='profileTestimonial'>
                        <img id="avatar" src={Man} alt="avatar"/>
                        <p>John Doe, DESIGNMODO</p>
                    </div>

                </div>

                <div className='testimonialContainer'>
           
           
                    <p className='testimonialText'>Un vrai plaisir de travailler avec vous, Merci Maxime, Merci Jefferson</p>

                    
                    <div className='profileTestimonial'>
                        <img id="avatar" src={Man} alt="avatar"/>
                        <p>Fabrice HUET, WCS</p>
                    </div>

                </div>

                <div className='testimonialContainer'>
           
           
                    <p className='testimonialText'>The most important part of the Startup Framework are the testimonials. Testimonials are a part of serious and confidence
                        for the Startup.</p>

                    
                    <div className='profileTestimonial'>
                        <img id="avatar" src={Man} alt="avatar"/>
                        <p>John Doe, DESIGNMODO</p>
                    </div>

                </div>

            </div>
            
            {/* <div className='buttonContainer'>
        
                <button id='commentBtn'>Ecrire un commentaire</button>

            </div> */}
        
        
        </>

    )
}

export default Testimonials