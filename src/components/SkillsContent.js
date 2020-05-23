// FILE TO SHOW ALL SKILL LIST OBJECT IN SKILLS.JS
import React from 'react'

class SkillsContent extends React.Component{
  render(){
    //GET ALL ITEMS IN ARRAY OF "SKILLS LIST.ITEMS"
    const itemContent = itemList => {
      let content = [];
      for(let idx in itemList)
      {
        content.push(<li key={itemList[idx]} className="skill-item">{itemList[idx]}</li>);
      }
      return content;
    };

    return(
      <li className="skill-title"><h2>{this.props.name}</h2>
        <ul>{itemContent(this.props.items)}</ul>
      </li>
    );
  }
}

export default SkillsContent;
