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
                for the Startup.</p>

            

            

            <div className='profileTestimonial'>
                <img id="avatar" src={Man}/>
                <p>John Doe, DESIGNMODO</p>
            </div>

            </div>

            </div>
            
            <div className='buttonContainer'>
        
            <button id='commentBtn'>Leave a comment</button>
            </div>
        
        
        </>

    )
}

export default Testimonials