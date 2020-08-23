import React from 'react'
import projectsList from '../contents/Projects'
import './Projects.css'

class Projects extends React.Component{
  render(){
    //FUNCTION TO EXTRACT ALL TAGS INFO IN PROJECT OBJECT
    const tagsContent = tagsList => {
      let content = [];
      for(let idx in tagsList)
      {
        content.push(
          <div className="col tags py-2" key={tagsList[idx]}>{tagsList[idx]}</div>
        );
      }
      return content;
    };

    return(
      <div className="container-fluid projects-section">
        <h1 className="title"><span className="sign">&#187;</span>PROJECTS<span className="sign">&#171;</span></h1>
        <div className="card-columns">
          {projectsList.map((projectItem)=>{
              return(
                <div className="project card" key={projectItem.id}>
                  <img src={projectItem.image} className="card-img-top" alt="..." />
                  <div className="card-body pb-2">
                    <h5 className="card-title pb-2">{projectItem.name}</h5>
                    <div className="container">
                      <div className="d-flex justify-content-center">
                        <a className="fa fa-github fa-lg px-3" href={projectItem.github} aria-hidden={false} target="_blank" rel="noopener noreferrer">{null}</a>
                        <a className="fa fa-link fa-lg px-3" href={projectItem.media} target="_blank" rel="noopener noreferrer">{null}</a>
                      </div>
                    </div>
                    <p className="card-text">{projectItem.description}</p>
                    <div className="row row-cols-2 border-top">
                      {tagsContent(projectItem.tags)}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Projects;
