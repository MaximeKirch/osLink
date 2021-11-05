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

                    <div className="searchCard">
                    
                        <img src={project.avatar} alt="avatar" />

                        <div className="dataContainer">

                            <div className="mainCard">

                               

                                    <div id="nameProject"><h6>{project.name}</h6></div>
                                    <div id="auteurProject">{project.author}</div>
                                    <div id="languageProject">{project.language}</div>
                                    <div id="descriptionProject">{project.description.length === 0 ? 'Ce projet ne comporte pas de description' : project.description}</div>   
                            
                               

                            </div>

                            
                    
                        </div>

                        <div className="footerCard">
                            
                               
                                    <div className="starsProject"><img src={gitstars} id='starProject' alt='stars'/>{project.stars} stars</div>
                                    <div className="forksProject"><img src={fork} id="forkProject" alt='fork'/>{project.forks} forks</div>

                           
                                
                        
                            </div>

                    </div>

                </a>

        </div>

    );


}

export default SearchModule;

