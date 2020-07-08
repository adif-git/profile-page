// FILE TO EXTRACT ALL INFORMATION FROM WORKLIST OBJECTS IN WORK.JS
import React from 'react'
import './WorkContent.css'

class WorkContent extends React.Component{
  render(){
    let content;
    //container on the left for even number id
    if(this.props.id % 2 === 0){
      content = (
      <div className="work-container left">
          <div className="content">
            <h3>{this.props.name}</h3>
            <h4>{this.props.place}</h4>
            <h5>{this.props.type}  ({this.props.date})</h5>
            <p>{this.props.description}</p>
          </div>
      </div>
      );
    } else {
      //container on the right for odd number id
      content = (
        <div className="work-container right">
          <div className="content">
            <h3>{this.props.name}</h3>
            <h4>{this.props.place}</h4>
            <h5>{this.props.type}  ({this.props.date})</h5>
            <p>{this.props.description}</p>
          </div>
        </div>
      );
    }
    return(
      <div>
        {content}
      </div>
    );
  }
}

export default WorkContent;
