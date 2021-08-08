import React from 'react'
import logo from '../assets/logo192.png'
import '../App.css'

function Nav() {
    return(
        <>

        <div className='navBar'>
            <div className="navMenu">
                <img id="logo" src={logo} alt='navLogo' />
                <h1 className='title'>OS Link</h1>
                
            </div>

            

        <div classname="submit">
            <button id="submitBtn"><a href='#'>Submit project</a></button>

        </div>
        
        </div>

        </>
    )
}

export default Nav;