import React from 'react'
import './Projects.css'

class Projects extends React.Component{
  //OBJECTS OF PROJECTS
  render(){
    const projectList = [
      {
        id: '1',
        name: 'Quadcopter for Vehicle Counting',
        image: './Images/42612.jpg',
        tags:['Raspberry Pi', 'Computer Vision', 'Embedded System', 'C++'],
        description: "Build from scratch quadcopter with only purpose to count number of vehicles that are travel on road in real time using computer vision. Capable to count with approximately 60% accuracy. Besides number of vehicles, quadcopter's altitude and video stream also will be recorded.",
        media: '/#',
        github: '/#',
      },
      {
        id: '2',
        name: 'Library',
        image: './Images/Homepage.png',
        tags:['Web Development', 'Django', 'HTML', 'CSS', 'Python', 'SQL'],
        description: 'First time on building website using Django and MySQL as backend. Authorized users have access to add, update, and delete book/author.',
        media: 'https://github.com/adif-git/library/tree/master/Screenshot',
        github: 'https://github.com/adif-git/library',
      },
      {
        id: '3',
        name: 'Goalkeeper Robot',
        image: './Images/Goalkeeper.png',
        tags:['Raspberry Pi', 'Arduino', 'Computer Vision', 'Embedded System', 'C++'],
        description: 'Robot will autonomously move and follow wherever ball is moving like a goalkeeper. Developed in C++ with computer vision based on color detection.',
        media: '/#',
        github: '/#',
      },
      {
        id: '4',
        name: 'Hexapod Robot',
        image: './Images/Hexapod.png',
        tags:['Raspberry Pi', 'Arduino', 'Embedded System', 'C++', 'Python'],
        description: 'Hexapod robot which can be remotely control through WiFi. User will control robot movement wirelessly.',
        media: '/#',
        github: '/#',
      },
      {
        id: '5',
        name: 'GitHub Profile Page',
        image: './Images/Profile.png',
        tags:['Web Development', 'React.js', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        description: 'This profile page build using React.js. Visit my GitHub page to see other projects.',
        media: 'https://adif-git.github.io/profile-page/',
        github: 'https://github.com/adif-git/profile-page',
      },
    ];

    //FUNCTION TO EXTRACT ALL TAGS INFO IN PROJECT OBJECT
    const tagsContent = tagsList => {
      let content = [];
      for(let idx in tagsList)
      {
        content.push(
          // <li key={tagsList[idx]} className="tags-item">{tagsList[idx]}</li>
          <div className="col tags pt-2" key={tagsList[idx]}>{tagsList[idx]}</div>
        );
      }
      return content;
    };

    //MODAL CONDITION WHEN PROJECT IS CLICK
    // let modal;
    // if(this.state.isModalOpen){
    //   modal = (
    //       <div className="modal">
    //         <div className="modal-inner">
    //           <img src={this.state.image} />
    //           <h2>{this.state.name}</h2>
    //           <h3>Description:</h3>
    //           <div className="tags">
    //             <ul>{tagsContent(this.state.tags)}</ul>
    //           </div>
    //           <p>{this.state.description}</p>
    //           <button
    //             className="modal-close-btn"
    //             onClick={()=>{this.handleClickClose()}}
    //           >
    //             Close
    //           </button>
    //         </div>
    //       </div>
    //   )
    // }

    return(
      <div className="container-fluid projects-section">
        {/* <h1 className="main-title">PROJECTS</h1>
        <div className="one-section">
          <ul className="projects">
          {projectList.map((projectItem)=>{
            return(
              <li className="project" key={projectItem.id} onClick={()=>{this.handleClickProject(projectItem)}}>
                <div className="project-content">
                  <img src={projectItem.image} />
                </div>
              </li>
            );
          })}
          </ul>
        </div>
        {modal} */}
        <h1 className="title"><span className="sign">&#187;</span>PROJECTS<span className="sign">&#171;</span></h1>
        <div className="card-columns mx-4 mt-5">
          {projectList.map((projectItem)=>{
              return(
                <div className="project card shadow-lg mb-5" key={projectItem.id}>
                  <img src={projectItem.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{projectItem.name}</h5>
                    <div className="container">
                      <div className="row justify-content-center">
                        <div className="col-2">
                          <a className="fa fa-github fa-lg" href={projectItem.github}></a>
                        </div>
                        <div className="col-2">
                          <a className="fa fa-image fa-lg" href={projectItem.media}></a>
                        </div>
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
