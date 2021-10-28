import React from 'react';
import iphone from '../assets/iphone.png'
import settings from '../assets/settings.png'
import cobweb from '../assets/cobweb.png'
import man from '../assets/man.png'
import layers from '../assets/layers.png'
import video from '../assets/video.png'
import comps from '../assets/comps.png'
import '../App.css'

function Service() {
    return(
        <div className="Service"> 
            <div className='serviceContainer'>
                <img id="phone" alt="iphone" src={iphone} /> 
               
                <div className='serviceInfos'>
                     <h2 className="serviceTitle1">To Be Proud by</h2>
                     <h2 className="serviceTitle2">Your Application</h2>

                    <p className="serviceP">Try to generate more interesting stuff for your visitors, with help of our developers.</p>

                    <div className="serviceIcons">

                        <div className='icons'>
                            { <img className='serviceImg' src={cobweb} /> }
                            <p>HTML, CSS, JS</p>
                        </div>

                        <div className='icons'>
                            { <img className='serviceImg'  src={settings} /> }
                            <p>Free Google Fonts</p>
                        </div>

                        <div className='icons'>
                            { <img className='serviceImg' src={video} /> }
                            <p>Ready To Present</p>
                        </div>

                        <div className='icons'>
                            { <img className='serviceImg'  src={layers} /> }
                            <p>Crops and Layers</p>
                        </div>

                        <div className='icons'>
                            { <img className='serviceImg'  src={comps} /> }
                            <p id='powerful'>Powerful Components</p>
                        </div>

                        <div className='icons'>
                            { <img className='serviceImg'  src={man} /> }
                            <p>Frameworks Friendly</p>
                        </div>
                    </div>
                </div>

            </div>

            
        
        
        
        </div>
    )
}


export default Service;