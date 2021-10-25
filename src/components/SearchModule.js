import React from 'react';
import fork from '../assets/fork.png'
import star from '../assets/star.png'
import gitstars from '../assets/gitstars.png'

const SearchModule = (props) => {

    //On affecte les props à un variable pour plus de praticité
    const {project} = props;

    //Ici on gère l'affichage des données que l'on récupère de l'API
    
    return (
        <div className="searchModule">

                <a href={project.url}>

                    <li className="searchCard">
                    
                        <img src={project.avatar} alt="avatar" />

                        <div className="dataContainer">

                            <div className="mainCard">

                                <ul>

                                    <li id="nameProject"><h6>{project.name}</h6></li>
                                    <li id="AuteurProject">{project.author}</li>
                                    <li id="languageProject">{project.language}</li>
                                    <li id="descriptionProject">{project.description}</li>   
                            
                                </ul>

                            </div>

                            <div className="footerCard">
                            
                                <ul>
                                    <li className="starsProject"><img src={gitstars} id='starProject' alt='stars'/>{project.stars} stars</li>
                                    <li className="forksProject"><img src={fork} id="forkProject" alt='fork'/>{project.forks}</li>

                           
                                </ul>
                        
                            </div>
                    
                        </div>

                    </li>

                </a>

        </div>

    );


}

export default SearchModule;

