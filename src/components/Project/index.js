import React from 'react';


function ProjectCards(props) {
    return (
        <div className='card'>
            <div className='img-container'>
                <img alt={props.name} src={props.image}/>
            </div>
            <div className='content'>
                <p className='card-title'>{props.name}</p>
                <p className='proj-icons-container'>
                    <a href={props.github}><img class="project-icon" src="https://img.icons8.com/fluent/48/000000/github.png" alt='GitHub Repo' /></a>
                    <a href={props.deploy}><img class="projet-icon" src='https://img.icons8.com/fluent/48/0000000/domain.png' alt='Live Application' /></a>
                </p>
                <p class="topics">
                    ({props.topics})
                </p>
            </div>
        </div>
    );
}

export default ProjectCards;