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


                <li className="searchCard">
                    <a href={project.url}><img src={project.avatar} alt="avatar" /></a>

                    <div className="dataContainer">

                        <div className="mainCard">

                            <ul>

                                <li id="nameProject">{project.name}</li>
                                <li>{project.author}</li>
                                <li>{project.language}</li>
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

        </div>

    );


}

export default SearchModule;

