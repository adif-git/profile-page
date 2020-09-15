import React, {useState} from 'react'
import GKS from '../resources/GKS.jpg'
import './Achievement.css'

const Achievement = props => {
    const [info, setInfo] = useState(false)

    const handleInfo = () =>{
        if(info) setInfo(false) 
        else setInfo(true) 
    }

    return(
        <div className="achievement-section">
            <div className="header-section">
                <h1>ACHIEVEMENT</h1>
            </div>
            <div className="body-section">
                <div className='gks'>
                    <img src={GKS} alt="..."></img>
                    <h3 onClick={()=>handleInfo()}><span className='fa fa-chevron-down'></span>INFO<span className='fa fa-chevron-down'></span></h3>
                    {info ? 
                        <div className="gks-info">
                            <h4>Global Korean Scholarship (GKS) for ASEAN Countries Science and Engineering Students</h4>
                            <h5>July 2017</h5>
                            <p>One of the selected 120 ASEAN students for a month opportunity to study in South Korea which fully funded by South Korea's Ministry of Education consists of lab research, cultural activities, and lectures. Research topic about energy harvesting on power lines using electromagnetic field at Chung-Ang University, Seoul.</p>
                        </div> : null
                    }
                    

                </div>
            </div>
        </div>
    )
}

export default Achievement