import React from 'react'
import SkillsContent from './SkillsContent'
import skillsList from '../contents/Skills'
import './Skills.css'

class Skills extends React.Component{
  render(){
    return(
      <div className="container-fluid skills-section">
        <h1 className="title"><span className="sign">&#187;</span>SKILLS<span className="sign">&#171;</span></h1>
        <div className="row row-cols-1 row-cols-md-4 px-lg-5">
          {skillsList.map((skillItem)=>{
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
