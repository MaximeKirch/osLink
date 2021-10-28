import React from 'react'
import logo from '../assets/connection.png'
import ProjectButton2 from './ProjectButton2'
import '../App.css'
import { NavLink } from 'react-router-dom'




function Nav() {

    
    return(
        <>

        <div className='navBar'>

            <NavLink className="navMenu" exact to = "/osLink">
            
                <img id="logo" src={logo} alt='navLogo' />
                <h1 id='title'><a className="a1Nav" href="#">OS Link</a></h1>
                 
            </NavLink>
        
<<<<<<< HEAD
             <Dlbutton />
        <ProjectButton />
=======
             
            
        <ProjectButton2 />
>>>>>>> 1aa8a30030f35f1f8df439eb55dc070c81978886
        
        </div>

        </>
    )
}

export default Nav;