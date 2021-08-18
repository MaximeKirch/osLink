import React from 'react'
import '../App.css'


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
                        <li>Fajema</li>
                        <li>Partout dans le monde</li>
                        <li>Nous sommes en Remote</li>
                    </ul>
                </div>
                {/*colonne2*/}
                <div className="col">
                    <h3 className="h3Footer">Créé par</h3>
                    <ul className="footerList">
                        <li>Fabrice HUET</li>
                        <li>Jefferson Guegan</li>
                        <li>Maxime Kirch</li>
                    </ul>
                </div>
                {/*colonne3*/}
                <div className="col">
                <h3 className="h3Footer">Sur les réseaux</h3>
                    <ul className="footerList">
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Facebook</li>
                    </ul>
                </div>    
            </div>
                     
        </div>
        <hr></hr>
        <div className="footerNoRow">
            <p className="lastFooter">
            &copy;{new Date().getFullYear()} FAJEMA INC</p>
            <p className="lastFooter">
            <a href="#">Engagement de confidentialité</a> | <a href="#">Utilisation des cookies</a> | <a href="#">Conditions d’utilisation</a> | <a href="#">Mentions légales</a> | <a href="#">Plan du site</a>
            </p>   
            </div> 
    </div>
        


</>
    )
}

export default Footer