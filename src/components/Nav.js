import React from 'react'
import logo from '../assets/connection.png'
import ProjectButton from './ProjectButton'
import '../App.css'
import { NavLink } from 'react-router-dom'
import Compotest from './Compotest'
import Dlbutton from './Dlbutton'



function Nav() {

    
    return(
        <>

        <div className='navBar'>

            <NavLink className="navMenu" exact to = "/osLink">
            
                <img id="logo" src={logo} alt='navLogo' />
                <h1 id='title'><a href="#">OS Link</a></h1>
                 
            </NavLink>
        
             <Dlbutton />
            <Compotest />
        <ProjectButton />
        
        </div>

        </>
    )
}

export default Nav;