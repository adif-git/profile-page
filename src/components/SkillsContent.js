// FILE TO SHOW ALL SKILL LIST OBJECT IN SKILLS.JS
import React from 'react'
import './SkillsContent.css'

class SkillsContent extends React.Component{
  render(){
    //Get all items from "skillList.items"
    const itemContent = itemList => {
      let content = [];
      for(let idx in itemList)
      {
        content.push(<li key={itemList[idx]} className="text-center list-group-item py-0 mb-3 border-top-0 skill-list">{itemList[idx]}</li>);
      }
      return content;
    };

    return(
      <div className="col mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title skill-title pb-3">{this.props.name}</h5>
          <ul className="list-group">
            {itemContent(this.props.items)}
          </ul>
        </div>
      </div>
      </div>
    );
  }
}

export default SkillsContent;
