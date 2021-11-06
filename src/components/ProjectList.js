import React from 'react';


const ProjectList = (props) => {

    const {item} = props;

    return (
        <div className="project-item">

            <div className="project-img">

                <img src={item.img} alt="Image du projet"/>

            </div>

            <div className="project-title">

                <h3>{item.name}</h3>

            </div>

            <div className="project-infos">

                <p>{item.desc}</p>
                <a href={item.url}>Voir le projet</a>
            </div>
        </div>
    );
};

export default ProjectList;