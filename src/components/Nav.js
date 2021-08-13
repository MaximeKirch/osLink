import React from 'react'
import logo from '../assets/connection.png'
import ProjectButton from './ProjectButton'
import '../App.css'

function Nav() {

    
    return(
        <>

        <div className='navBar'>
            <div className="navMenu">
            
                <img id="logo" src={logo} alt='navLogo' />
                <h1 id='title'><a href="#">OS Link</a></h1>
            
                
            </div>

            

        <ProjectButton />
        
        </div>

        </>
    )
}

export default Nav;