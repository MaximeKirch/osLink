import React from 'react';
import iphone from '../assets/iphone.png'
import html from '../assets/html.png'
import fonts from '../assets/fonts.png';
import '../App.css'

function Service() {
    return(
        <> 
            <div className='serviceContainer'>
                <img id="phone" alt="iphone" src={iphone} /> 
               
                <div className='serviceInfos'>
                     <h2 className="serviceTitle1">To Be Proud by</h2>
                     <h2 className="serviceTitle2">Your Application</h2>

                    <p className="serviceP">Try to generate more interesting stuff for your visitors, with help of our developers.</p>

                    <div className="serviceIcons">

                        <div className='icons'>
                            { <img id="html" src={fonts} /> }
                            <p>HTML 5, CSS3, JS11</p>
                        </div>

                        <div className='icons'>
                            { <img id='fonts'  src={fonts} /> }
                            <p>Free Google Fonts</p>
                        </div>

                        <div className='icons'>
                            { <img id='fonts'  src={fonts} /> }
                            <p>Ready To Present</p>
                        </div>

                        <div className='icons'>
                            { <img id='fonts'  src={fonts} /> }
                            <p>Crops and Layers</p>
                        </div>

                        <div className='icons'>
                            { <img id='fonts'  src={fonts} /> }
                            <p>Powerful Components</p>
                        </div>

                        <div className='icons'>
                            { <img id='fonts'  src={fonts} /> }
                            <p>Frameworks friendly</p>
                        </div>
                    </div>
                </div>

            </div>

            
        
        
        
        </>
    )
}


export default Service;