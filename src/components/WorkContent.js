// FILE TO EXTRACT ALL INFORMATION FROM WORKLIST OBJECTS IN WORK.JS
import React from 'react'
import './WorkContent.css'

class WorkContent extends React.Component{
  render(){
    let content;
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
      // <div className="work-section">
      //   <h1>{this.props.name}</h1>
      //   <h2>{this.props.place}</h2>
      //   <h3>{this.props.type}  ( {this.props.date} )</h3>
      //   <p>{this.props.description}</p>
      // </div>
      <div>
        {content}
      </div>
    );
  }
}

export default WorkContent;
