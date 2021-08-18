import React from 'react';

const SearchModule = (props) => {
    const {project} = props;

    return (
        <li className="searchModule">
            <img src={project.avatar} alt="avatar" />
            <div className="data-container">
                <ul>
                    <li>{project.name}</li>
                    <li>{project.descritpion}</li>
                </ul>

            </div>

        </li>
    );


}

export default SearchModule;

