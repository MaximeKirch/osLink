import React, { useState } from 'react'
import '../App.css'

export default function Modal() {

    //Ici on fixe les hooks pour les inputs
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [url, setUrl] = useState("");
    const [message, setMessage] = useState("");

    // A chaque fois que le formulaire est envoyé ça lance handleSubmit
    const handleSubmit = (event) => {
        event.preventDefault();

        //Ici on vérifie bien que le name l'email l'url et le message sont renseignés
        if(name && email && url && message) {

        
            // La fonction récupère le template et les variables et nous les envoie par mail
            sendFeedback("template_s6md2zci", {
            name,
            email,
            url,
            message,
            });
        } else {
            console.log("Erreur");
        }
    }

    const sendFeedback = (templateId, variables) => {
        window.emailjs
            .send("service_7pj63ry", templateId, variables)
            .then((res) => {
                // Une fois les données envoyées par mail on remet les useStates à 0
                setName("");
                setEmail("");
                setUrl("");
                setMessage("");
            })
            .catch((err) => {
                console.log("Erreur catch");
            } 
            )
    }

    return (
        <div className='Modal'>
            
        
        <h2 id="projectTitle">Submit Project</h2>

        <form id='projectForm'>
            <input type='text' 
            name='name'  
            placeholder='Your name*' 
            value={name}
            onChange={(e) => setName (e.target.value)}></input>
            <input type='text' 
            name='email'  
            placeholder='your@mail.fr*'
            value={email}
            onChange={(e) => setEmail (e.target.value)}></input>
            <input type='text' 
            name='url' 
            placeholder='GitHub Repository URL*'
            value={url}
            onChange={(e) => setUrl (e.target.value)}></input>
            
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
                <textarea type='text' 
                placeholder='Describe your project...*' 
                name='message' 
                value={message}
                onChange={(e) => setMessage (e.target.value)}></textarea>
                
                
            </div>

            <button 
            type='submit' 
            id='submitBtn'
            onClick={handleSubmit}>Submit</button>
        
        </form>

        <div id="submitContent">
            
        </div>
        

    </div>
    )
}
