import React from 'react'
import '../App.css'
import desk from '../assets/desk.jpg'


function HeroBanner() {
    return(
    <>
        <div className="backgroundImage">

            {/* <img id='hero' src="https://i.picsum.photos/id/1004/5616/3744.jpg?hmac=Or7EJnz-ky5bsKa9_frdDcDCR9VhCP8kMnbZV6-WOrY" /> */}
            <img id='hero' src={desk}/>
            <h2 id="heroText">For devs, by devs.</h2>

        </div>


</>
    )
}

export default HeroBanner