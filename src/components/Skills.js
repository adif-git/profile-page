import React from 'react'
import SkillsContent from './SkillsContent'

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
        items: ['Arduino', 'Eagle' ,'ESP32', 'Linux' ,'OpenCV', 'Raspberry Pi']
      },
      {
        id: '3',
        name: 'Web Development',
        items: ['Flask', 'Django', 'HTML', 'CSS', 'JavaScript', 'SQL']
      },
      {
        id: '4',
        name: 'Other',
        items: ['Adobe Photoshop']
      },
    ];

    return(
      <div className="skills-section">
        <h1><span className="sign">&#62;</span>SKILLS<span className="sign">&#60;</span></h1>
        <ul className="skills">
          {skillList.map((skillItem)=>{
            return(
              <SkillsContent
                key = {skillItem.id}
                name = {skillItem.name}
                items = {skillItem.items}
              />
            );
          })}
        </ul>
      </div>
    )
  }
}

export default Skills;
