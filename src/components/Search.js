import React, {useEffect, useState} from 'react';
import SearchModule from './SearchModule';

const Search = () => {

    const [projects, setProjects] =useState ([]);
    
        useEffect(() => {
            fetch('https://api.trending-github.com/github/repositories')
            .then(res => res.json())
            .then (projects => {setProjects(projects);
            })

        }, []);

    return (

        <div className="projects">
        <ul className="projects-list">
            {projects.map((project) => (
            <SearchModule project={project} key={project.idS}/>
            ))}
        </ul>
    </div>

    );
}

export default Search;