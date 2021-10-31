import React from 'react'
import '../App.css'
import twitter from '../assets/twitter.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import linkedin from '../assets/linkedin.svg'


function Footer() {
    return(
    <>
    <div className="footerMain">
        <div className="footerContainer">
            <div className="footerRow">
                {/*colonne1*/}
                <div className="col">
                    <h3 className="h3Footer"> Où Nous trouver ?</h3>
                    <ul className="footerList">
                        <li>FaJeMa</li>
                        <li>Partout dans le monde</li>
                        <li>Nous sommes en Remote</li>
                    </ul>
                </div>
                {/*colonne2*/}
                <div className="col">
                    <h3 className="h3Footer">Créé par</h3>
                    <ul className="footerList">
                        <li><img id="linkedinLogo" class="logo" alt="logo linkedin" src={linkedin}>
                            </img><a href="https://www.linkedin.com/in/fabrice-huet/"> Fabrice HUET</a></li>
                        <li><img id="linkedinLogo" class="logo" alt="logo linkedin" src={linkedin}>
                            </img><a href="https://www.linkedin.com/in/jefferson-guegan-403753217/"> Jefferson GUEGAN</a></li>
                        <li><img id="linkedinLogo" class="logo" alt="logo linkedin" src={linkedin}>
                            </img><a href="https://www.linkedin.com/in/maxime-kirch-467443135/"> Maxime KIRCH</a></li>
                    </ul>
                </div>
                {/*colonne3*/}
                <div className="col">
                <h3 className="h3Footer">Sur les réseaux</h3>
                    <ul className="footerList">
                        <li><img id="twitterLogo" class="logo" alt="logo Twitter" src={twitter}>
                            </img> Twitter</li>
                        <li><img id="instagramLogo" class="logo" alt="logo instagram" src={instagram}>
                            </img>  Instagram</li>
                        <li><img id="facebookLogo" class="logo" alt="logo facebook" src={facebook}>
                            </img> Facebook</li>
                        </ul>
                </div>    
            </div>
                     
        </div>

      
        
        <div className="footerNoRow">
            <p className="lastFooter">
            &copy;{new Date().getFullYear()} FAJEMA INC</p>
            <p className="lastFooter">
            <a href="#">Engagement de confidentialité</a> | <a href="#">Utilisation des cookies</a> | <a href="#">Conditions d’utilisation</a> | <a href="#">Mentions légales</a> | <a href="#">Plan du site</a>
            </p>   
            </div> 
    </div>

      {/* Responsive Footer */}

        <div className='responsiveFooter'>

            <p>{new Date().getFullYear()} FAJEMA INC</p>
            <div className='responsiveList'>
                <ul>
                    <li><img id="linkedinLogo" class="logo" alt="logo linkedin" src={linkedin}>
                        </img><a href="https://www.linkedin.com/in/fabrice-huet/"> Fabrice HUET</a></li>
                    <li><img id="linkedinLogo" class="logo" alt="logo linkedin" src={linkedin}>
                        </img><a href="https://www.linkedin.com/in/jefferson-guegan-403753217/"> Jefferson GUEGAN</a></li>
                    <li><img id="linkedinLogo" class="logo" alt="logo linkedin" src={linkedin}>
                        </img><a href="https://www.linkedin.com/in/maxime-kirch-467443135/"> Maxime KIRCH</a></li>
                </ul>
            </div>
        </div>
        


</>
    )
}

export default Footer