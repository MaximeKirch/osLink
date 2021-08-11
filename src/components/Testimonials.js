import React from 'react'
import Man from '../assets/man.png'
import '../App.css'

function Testimonials() {

    return(
        <>
            <div className='testimonialMain'>

            {/* <hr id="testimonialHr"></hr> */}
            <div className='testimonialContainer'>
            <p className='testimonialText'>The most important part of the Startup Framework are the testimonials. Testimonials are a part of serious and confidence
                for the Startup. </p>

            

            </div>

            <div className='profileTestimonial'>
                <img id="avatar" src={Man}/>
                <p>John Doe, DESIGNMODO</p>
            </div>

            </div>
        
        
        
        
        </>

    )
}

export default Testimonials