import React from 'react'
import logo from '../assets/connection.png'
import ProjectButton2 from './ProjectButton2'
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
                <h1 id='title'><a className="a1Nav" href="#">OS Link</a></h1>
                 
            </NavLink>
        
             <Dlbutton />
            
        <ProjectButton2 />
        
        </div>

        </>
    )
}

export default Nav;