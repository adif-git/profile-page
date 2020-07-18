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
        description: "Build from scratch quadcopter with only purpose to count number of vehicles that are travel on road in real time using computer vision. Capable to count with approximately 60% accuracy because calculated without machine learning. Besides number of vehicles, quadcopter's altitude and video stream also will be recorded.",
        media: 'https://drive.google.com/file/d/1m7gDiac_ph88rR9GnaivVQUR7A81-cin/view?usp=sharing',
        github: '/#',
      },
      {
        id: '2',
        name: 'Library',
        image: 'https://raw.githubusercontent.com/adif-git/library/master/Screenshot/Homepage.png',
        tags:['Web Development', 'Django', 'HTML', 'CSS', 'Python', 'MySQL'],
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
        media: 'https://drive.google.com/file/d/1J-nxprEs1lAsyPAfUe4oy9mDJ-SHl0qu/view?usp=sharing',
        github: '/#',
      },
      {
        id: '4',
        name: 'Hexapod Robot',
        image: './Images/Hexapod.png',
        tags:['Raspberry Pi', 'Arduino', 'Embedded System', 'C++', 'Python'],
        description: 'Hexapod robot which can be remotely control through WiFi. User will control robot movement wirelessly.',
        media: 'https://drive.google.com/file/d/1XmU0Hye5k8mDxEsuXnGH0R1XJnGS0aVL/view?usp=sharing',
        github: '/#',
      },
      {
        id: '5',
        name: 'Water Tandon',
        image: 'https://raw.githubusercontent.com/adif-git/Water-Tandon/master/WaterTandon.png',
        tags:['Embedded System', 'Assembly', 'AT89S51'],
        description: 'This is my water tandon project using AT89S51 Microcontroller in Assembly Language. Sensors are used to indicate water level in the container and water level will be showed using 2 red LED. White LED shows on water pump behaviour.',
        media: 'https://drive.google.com/file/d/1-6Y2x8fUxX5pQXpT8p4y0iOeyCPnkuoK/view?usp=sharing',
        github: 'https://github.com/adif-git/Water-Tandon',
      },
      {
        id: '6',
        name: 'Project Tracker',
        image: 'https://raw.githubusercontent.com/adif-git/Project-Tracker/master/Screenshot/1.png',
        tags:['Web Development', 'Node.js', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'MySQL'],
        description: "Project Tracker website for tracking your own side projects build using Node.js and MySQL as database. This website contain two main parts, Project List and Task List. Project List is a list which define your main idea when doing projects. Task list is a list of task on what will you be doing from specific project. User can change each task's status (Pending, On Progress, or Completed).",
        media: 'https://github.com/adif-git/Project-Tracker/tree/master/Screenshot',
        github: 'https://github.com/adif-git/Project-Tracker',
      },
      {
        id: '7',
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
          <div className="col tags pt-2" key={tagsList[idx]}>{tagsList[idx]}</div>
        );
      }
      return content;
    };

    return(
      <div className="container-fluid projects-section">
        <h1 className="title"><span className="sign">&#187;</span>PROJECTS<span className="sign">&#171;</span></h1>
        <div className="card-columns mx-4 mt-5">
          {projectList.map((projectItem)=>{
              return(
                <div className="project card pb-2" key={projectItem.id}>
                  <img src={projectItem.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{projectItem.name}</h5>
                    <div className="container">
                      <div className="d-flex justify-content-center">
                        <a className="fa fa-github fa-lg px-1" href={projectItem.github}></a>
                        <a className="fa fa-image fa-lg px-1" href={projectItem.media}></a>
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
