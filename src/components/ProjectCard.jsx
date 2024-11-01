import React from 'react';
function ProjectCard(props) {
  return (
    <div className="project">
      {props.linkUrl ? (
        <a href={props.linkUrl} target="_blank" rel="noopener noreferrer">
          <img src={props.imageSrc} alt={props.title} className="project-image" />
        </a>
      ) : (
        <img src={props.imageSrc} alt={props.title} className="project-image" />
      )}
      <h3 className="project-title">{props.title}</h3>
      <p className="project-description">{props.description}</p>
      <button onClick={props.onButtonClick}>{props.buttonLabel}</button>
    </div>
  );
}

export default ProjectCard;