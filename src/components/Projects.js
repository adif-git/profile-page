import React from 'react'
import {Accordion, Card, Button} from 'react-bootstrap'
import './Projects.css'

class Projects extends React.Component{
  // //INITIAL STATE
  // constructor(props){
  //   super(props);
  //   this.state={
  //     isModalOpen: false,
  //     name: '',
  //     description: '',
  //     image: '',
  //     tags: '',
  //   };
  // }
  // //FUNCTION WHEN PROJECT IS CLICK
  // handleClickProject(item){
  //   this.setState({
  //     isModalOpen: true,
  //     name: item.name,
  //     description: item.description,
  //     image: item.image,
  //     tags: item.tags,
  //   });
  // }
  // //FUNCTION IF CLOSE BUTTON PRESSED IN MODAL PROJECT
  // handleClickClose(){
  //   this.setState({isModalOpen: false});
  // }

  //OBJECTS OF PROJECTS
  render(){
    const projectList = [
      {
        id: '1',
        name: 'Quadcopter for Vehicle Counting',
        image: './Images/42612.jpg',
        tags:['Raspberry Pi', 'Computer Vision', 'Embedded System', 'C++'],
        description: "Build from scratch quadcopter with only purpose to count number of vehicles that are travel on road in real time using computer vision. Capable to count with approximately 60% accuracy. Besides number of vehicles, quadcopter's altitude and video stream also will be recorded.",
        video: '',
        link: '',
      },
      {
        id: '2',
        name: 'Library',
        image: './Images/Homepage.png',
        tags:['Website', 'Django', 'HTML', 'CSS', 'Python', 'SQL'],
        description: 'First time on building website using Django and MySQL as backend. Authorized users have access to add, update, and delete book/author.',
        video: '',
        link: '',
      },
      {
        id: '3',
        name: 'Goalkeeper Robot',
        image: './Images/Goalkeeper.png',
        tags:['Raspberry Pi', 'Arduino', 'Computer Vision', 'Embedded System', 'C++'],
        description: 'Robot will autonomously move and follow wherever ball is moving like a goalkeeper. Developed in C++ with computer vision based on color detection.',
        video: '',
        link: '',
      },
      {
        id: '4',
        name: 'Hexapod Robot',
        image: './Images/Hexapod.png',
        tags:['Raspberry Pi', 'Arduino', 'Embedded System', 'C++', 'Python'],
        description: 'Hexapod robot which can be remotely control through WiFi. User will control robot movement wirelessly.',
        video: '',
        link: '',
      },
      {
        id: '5',
        name: 'GitHub Profile Page',
        image: './Images/Profile.png',
        tags:['Website', 'React.js', 'HTML', 'CSS', 'JavaScript'],
        description: 'This profile page build using React.js. Visit my GitHub page to see other projects.',
        video: '',
        link: '',
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
      <div className="projects-section">
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
        <div className="card-columns mx-4">
          {projectList.map((projectItem)=>{
              return(
                <div className="card" key={projectItem.id}>
                  <img src={projectItem.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{projectItem.name}</h5>
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
