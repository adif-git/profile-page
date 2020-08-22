import React from 'react'
import WorkContent from './WorkContent'
import worksList from '../contents/Works'
import './Work.css'

class Work extends React.Component{
  render(){
    return(
      <div className="work-section container-fluid">
        <h1 className="title"><span className="sign">&#187;</span>WORK EXPERIENCES<span className="sign">&#171;</span></h1>
        <div className="timeline">
          {worksList.map((workItem)=>{
              return(
                <WorkContent
                  key={workItem.id}
                  id = {workItem.id}
                  name = {workItem.name}
                  type = {workItem.type}
                  place = {workItem.place}
                  date = {workItem.date}
                  description = {workItem.description}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default Work;
