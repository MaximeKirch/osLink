import React, {useState} from 'react'
import '../App.css'
import Modal from './Modal'


function ProjectButton() {

    const [state, setState] = useState(false)



    

    return (
        <div className='submit'>
             
            <button  id="submitBtn"><a href='#'>Submit project</a></button>

            

        
        </div>
    )
    
    
}


export default ProjectButton