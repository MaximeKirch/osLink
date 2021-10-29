import React, {useState} from 'react'
import '../App.css'
import Modal from './Modal'



function ProjectButton2() {


const [isOpen, setIsOpen] = useState(false)


return isOpen ? (
        <>
        
        <Modal />
        <button id="close" onClick= {() => setIsOpen(false)}>Fermer X</button>
        </>
) : (
        <div id="aprojectButton2Cont">
        <a id="aprojectButton2" href="#">
        <span id="projectButton2" onClick = {() => setIsOpen(true)}>Submit project</span>
        <div class="liquid"></div>
        </a>
        </div>
        
        
)



}



export default ProjectButton2

