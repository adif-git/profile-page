// FILE TO EXTRACT ALL INFORMATION FROM WORKLIST OBJECTS IN WORK.JS
import React from 'react'

class WorkContent extends React.Component{
  render(){

    return(
      <div className="work-section">
        <h1>{this.props.name}</h1>
        <h2>{this.props.place}</h2>
        <h3>{this.props.type}  ( {this.props.date} )</h3>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default WorkContent;
