import React from 'react'
import './Achievements.css'

class Achievements extends React.Component{
  render(){
    return(
      <div className="container-fluid achievements-section">     
        <h1 className="title"><span className="sign">&#187;</span>ACHIEVEMENT<span className="sign">&#171;</span></h1>
        <h3>Global Korean Scholarship (GKS) for ASEAN Countries Science and Engineering Students</h3>
        <h4>July 2017</h4>
        <p>One of the selected 120 ASEAN students for a month opportunity to study in South Korea which fully funded by South Korea's Ministry of Education consists of lab research, cultural activities, and lectures. Research topic about energy harvesting on power lines using electromagnetic field at Chung-Ang University, Seoul.</p>
      </div>
    );
  }
}

export default Achievements
