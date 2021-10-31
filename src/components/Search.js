import React, {useEffect, useState} from 'react';
import SearchModule from './SearchModule';

const Search = () => {

    // Ici la variable qui recevra les projets de l'API
    const [projects, setProjects] =useState ([]);
    //Ici la variable qui récupère l'input text
    const [searchText, setSearchText]= useState ('');

    //Ici la variable qui récupère le radio bouton
    const [selectedRadio, setSelectedRadio]= useState('')

    //Ici les radios bouton
    const radios = ["C++","Java","JavaScript","PHP","Python","C","C#","R","TypeScript"]
    
    // Ici on appelle l'API qui va remplir la variable
        useEffect(() => {
            fetch('https://api.trending-github.com/github/repositories')
            .then(res => res.json())
            .then (projects => {setProjects(projects);
            })

        }, []);

        console.log(selectedRadio)

    return (

        <div className="projects">

            <h2>Entrez vos mots-clef</h2>

            
            <input type="text" 
            id="search" 
            placeholder="Tapez votre recherche"
            autocomplete="off"
            //Ici on récupère la valeur de l'input text dans sa variable
            onChange = {(e) => setSearchText(e.target.value)}>
            </input>

            <div className="filter">

                <div className="sort-container">

                    <ul>
                        

                        {radios.map((radio) => {

                            return (

                                <li key={radio}>

                                   
                                    <input type="radio"value={radio} id={radio}
                                    checked={radio===selectedRadio} 
                                    //Ici on récupère le radio dans sa variable
                                    onChange={(e) => setSelectedRadio(e.target.value)}/>

                                    {/*Ici on nomme les radios et on en rend qu'un seul sélectionnable*/}
                                    <label htmlFor={radio}>{radio}</label>
                                </li>

                            );
})}
                    </ul>
                </div>

                <div className='sort-list'>
                    <select onChange={(e) => setSelectedRadio(e.target.value)}>
                        <option value=''>Trier par langage...</option>
                        
                           {radios.map((radio) => {
                               return (
                                   <option 
                                   key={radio} 
                                   value={radio} 
                                   select={radio===selectedRadio}
                                   
                                   >

                                    {radio}

                                    </option>

                                    
                               )
                           })} 
                        
                    </select>
                </div>

                <div className="cancel">
                    {/*Ici on crée un bouton annulant la sélection radio
                    il ne s'affiche que si un radio est coché selectRadion = true*/}
                    {selectedRadio && <h5 onClick={() => setSelectedRadio("")}>Retirer le filtre</h5>}
                </div>

            </div>

        {/*Ici on affiche les projets par défaut on les affiche tous*/}
        <ul className="projects-list">
            {projects
            //Ici on filtre sur l'input text
            .filter ((project) => project.description.toLowerCase().includes(searchText.toLowerCase()))
            //Ici onfiltre sur le radio
            .filter((project)=> project.language.includes(selectedRadio))
            //Ici on map chaque projet
            .map((project) => (
            <SearchModule project={project} key={project.name}/>
            ))}
        </ul>
    </div>

    );
}

export default Search;