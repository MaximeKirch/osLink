import React from 'react'
import '../App.css'

export default function Modal() {
    return (
        <div className='Modal'>
            
        
        <h2 id="projectTitle">Submit Project</h2>

        <form id='projectForm'>
            <input type='name' name='name'  placeholder='Your name'></input>
            <input type='mail' name='mail'  placeholder='your@mail.fr'></input>
            <input type='link' name='url' placeholder='GitHub Repositorie URL'></input>
            
            <div className='projectSelect'>
                <h3>Your project :</h3>
                <select>
                    <option> Choose an option</option>
                    <option>------Front End------</option>
                    <option>Website</option>
                    <option>Web App</option>
                    <option>Mobile App</option>
                    <option>------Back End-------</option>
                    <option>Integrate API</option>
                    <option>Server maintenance</option>
                    <option>------Other------</option>
                    <option>Other...</option>
                </select>
                <textarea type='text' placeholder='Describe your project...' name='infos' ></textarea>
                
                
            </div>

            <button formAction='submit' type='submit' id='submitBtn'>Submit</button>
        
        </form>

        <div id="submitContent">
            
        </div>
        

    </div>
    )
}
