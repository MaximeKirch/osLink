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
                     <h2 className="serviceTitle1">Soyez fiers</h2>
                     <h2 className="serviceTitle2">de vos applications</h2>

                    <p className="serviceP">Générez plus de contenu, avec l'aide de nos développeurs.</p>

                    <div className="serviceIcons">

                        <div className='icons'>
                            { <img className='serviceImg' src={cobweb} /> }
                            <p>HTML, CSS, JS</p>
                        </div>

                        <div className='icons'>
                            { <img className='serviceImg'  src={settings} /> }
                            <p>Google Fonts</p>
                        </div>

                        <div className='icons'>
                            { <img className='serviceImg' src={video} /> }
                            <p>Prêt à utiliser</p>
                        </div>

                        <div className='icons'>
                            { <img className='serviceImg'  src={layers} /> }
                            <p>Designs et maquettes</p>
                        </div>

                        <div className='icons'>
                            { <img className='serviceImg'  src={comps} /> }
                            <p id='powerful'>Composants puissants</p>
                        </div>

                        <div className='icons'>
                            { <img className='serviceImg'  src={man} /> }
                            <p>Compatible Frameworks</p>
                        </div>
                    </div>
                </div>

            </div>

            
        
        
        
        </div>
    )
}


export default Service;