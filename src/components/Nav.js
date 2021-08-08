import React from 'react'
import logo from '../assets/logo192.png'
import '../App.css'

function Nav() {
    return(
        <div className='Nav'>
        <div className="navMenu">
            <img id="logo" src={logo} alt='navLogo' />
        </div>

        <div classname="submit">
            <button id="submitBtn">Submit project</button>

        </div>
        </div>
    )
}

export default Nav;