import React from 'react'
import SkillsContent from './SkillsContent'
import './Skills.css'

class Skills extends React.Component{
  render(){
    //OBJECT FOR SKILL LIST
    const skillList = [
      {
        id: '1',
        name: 'Programming',
        items: ['Python', 'C', 'C++']
      },
      {
        id: '2',
        name: 'Embedded System',
        items: ['Arduino', 'Eagle' ,'ESP32' ,'Computer Vision (OpenCV)', 'Raspberry Pi']
      },
      {
        id: '3',
        name: 'Web Development',
        items: ['HTML', 'CSS', 'JavaScript','Node.js', 'React.js', 'MySQL']
      },
      {
        id: '4',
        name: 'Other',
        items: ['Adobe Photoshop', 'Linux', 'Git']
      },
    ];

    return(
      <div className="container-fluid skills-section">
        <h1 className="title"><span className="sign">&#187;</span>SKILLS<span className="sign">&#171;</span></h1>
        <div className="row row-cols-1 row-cols-md-4 px-lg-5">
          {skillList.map((skillItem)=>{
            return(
              <SkillsContent
                key = {skillItem.id}
                name = {skillItem.name}
                items = {skillItem.items}
              />
            );
          })}
        </div>
      </div>
    )
  }
}

export default Skills;
