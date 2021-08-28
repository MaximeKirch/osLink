import React from 'react';

const SearchModule = (props) => {

    //On affecte les props à un variable pour plus de praticité
    const {project} = props;

    //Ici on gère l'affichage des données que l'on récupère de l'API
    
    return (
        <div className="searchModule">
            <div className="searchCard">
                <div className="data-container">
                    <a href={project.url}><img src={project.avatar} alt="avatar" /></a>
                    <ul>
                        <li>{project.name}</li>
                        <li>{project.author}</li>
                        <li>{project.language}</li>
                        <li>{project.description}</li>   
                    </ul>
                <div className="cardFooter">
                    <ul>
                        <li>{project.stars}</li>
                        <li>{project.forks}</li>
                        
                    </ul>
                </div>

                </div>
            </div>
        </div>

    );


}

export default SearchModule;

