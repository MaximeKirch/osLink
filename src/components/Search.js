import React, {useEffect, useState} from 'react';
import SearchModule from './SearchModule';

const Search = () => {

    const [projects, setProjects] =useState ([]);
    const [searchText, setSearchText]= useState ('');
    const [selectedRadio, setSelectedRadio]= useState('')
    const radios = ["C++","Java","JavaScript","PHP","Python","C","C#","R","TypeScript"]
    
        useEffect(() => {
            fetch('https://api.trending-github.com/github/repositories')
            .then(res => res.json())
            .then (projects => {setProjects(projects);
            })

        }, []);

    return (

        <div className="projects">
            <h2>Entrez vos mots-clef</h2>
            <input type="text" 
            id="search" 
            placeholder="Tapez votre recherche"
            autocomplete="off"
            onChange = {(e) => setSearchText(e.target.value)}>
            </input>
            <div className="filter">
                <div className="sort-container">
                    <ul>
                        {radios.map((radio) => {
                            return (
                                <li key={radio}>
                                    <input type="radio"value={radio} id={radio}
                                    checked={radio==selectedRadio} 
                                    onChange={(e) => setSelectedRadio(e.target.value)}/>
                                    <label htmlFor={radio}>{radio}</label>
                                </li>
                            );
})}
                    </ul>
                </div>

                <div className="cancel">
                {selectedRadio && <h5 onClick={() => setSelectedRadio("")}>Retirer le filtre</h5>}
                </div>
            </div>

        <ul className="projects-list">
            {projects
            .filter ((project) => project.description.toLowerCase().includes(searchText.toLowerCase()))
            .filter((project)=> project.language.includes(selectedRadio))
            .map((project) => (
            <SearchModule project={project} key={project.name}/>
            ))}
        </ul>
    </div>

    );
}

export default Search;