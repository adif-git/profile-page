import React, {useState} from 'react'
import worksList from '../contents/Works'
import './Works.css'

const Works = props => {
    const [works] = useState(worksList)

    return(
        <div className="works-section">
            <div className="header-section">
                <h1>WORK HISTORY</h1>
            </div>
            <div className="body-section">
                <div className="timeline">
                    {works.map((work)=>{
                        return(
                            <div className="timeline-item" key={work.id} date-is={work.date}>
                                <h3>{work.name}</h3>
                                <h4>{work.place}</h4>
                                <h5>{work.type}</h5>
                                <p>{work.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Works