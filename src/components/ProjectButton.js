import React, {useState} from 'react'
import '../App.css'
import Modal from './Modal'



function ProjectButton() {


const [isOpen, setIsOpen] = useState(false)


return isOpen ? (
        <>
        
        <Modal />
        <button id="close" onClick= {() => setIsOpen(false)}>Close X</button>
        </>
) : (
    <button id="submitBtn" onClick = {() => setIsOpen(true)}>Submit project</button>
)



}



export default ProjectButton