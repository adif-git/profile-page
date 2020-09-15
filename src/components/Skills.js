import React, {useState} from 'react'
import skillsList from '../contents/Skills'
import './Skills.css'

const Skills = props => {
    const [skills] = useState(skillsList)

    const itemContent = items => {
        let content = []
        items.map((item)=>{
            return content.push(<li key={item} className="skill">{item}</li>)
        })
        return content
    }

    return(
        <div className="skills-section">
            <div className="header-section">
                <h1>SKILLS</h1>
            </div>
            <div className="body-section">
                <div className="cards">
                    {skills.map((skill)=>{
                        return(
                            <div className="card" key={skill.id}>
                                <div className="card-header">
                                <img src={skill.image} alt="..."/>
                                    <h4 className="card-title">
                                        {skill.name}
                                    </h4>
                                </div>
                                <div className="card-main">
                                    {itemContent(skill.items)}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Skills