import React from 'react';
import fork from '../assets/fork.png'
import star from '../assets/star.png'
import gitstars from '../assets/gitstars.png'

const SearchModule2 = (props) => {

    //On affecte les props à un variable pour plus de praticité
    const {project} = props;

    //Ici on gère l'affichage des données que l'on récupère de l'API
    
    return (
        <div className="card">

            <a href={project.url}>

                <div className='cardContainer'> {/* ajout */}

                    <li className="searchCard">

                        <div className='cardBody'>
                            <img id='githubAvatar' src={project.avatar} alt="random project"/>
                            <h3 id="cardName">{project.name}</h3>
                            <h4 id="cardAuthor">{project.author}</h4>
                            <p id="cardLanguage">Developped in {project.language}</p>
                            <h4 id="cardDescription">{project.description}</h4>
                
            

                            <div className='cardFooter'>
                                <p id="cardStars"> <img src={gitstars} id='star' alt='star'/>{star} stars</p>
                                <p id="cardForks"> <img src={fork} id='fork' alt='fork'/>{fork} forks</p>
                                <a href={project.url} id="cardUrl">{project.url}</a>
                            </div>

                        </div>
        
                     </li>
                </div>{/* ajout */}

            </a>

        </div>

    );


}

export default SearchModule2;

