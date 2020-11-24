import React, { useState, useEffect } from 'react';

import { skillsData } from './assets/data';
import './Skills.scss';

const Skills = (props) => {
  const [skills] = useState(skillsData);

  const itemContent = (items) => {
    let content = [];
    items.map((item) => {
      return content.push(
        <li key={item} className="profile__skills__card__skill">
          {item}
        </li>
      );
    });
    return content;
  };

  useEffect(() => {
    const entry = document.getElementsByClassName('profile__skills__card');
    if (props.scrollPosition > 350) {
      for (let i = 0; i < entry.length; i++) {
        entry[i].style.opacity = 1;
      }
    } else {
      for (let i = 0; i < entry.length; i++) {
        entry[i].style.opacity = 0;
      }
    }
  });

  return (
    <div className="profile__skills">
      <div className="profile__skills__header">
        <h1>
          SKILLS<span>_</span>
        </h1>
      </div>
      <div className="profile__skills__body">
        <div className="profile__skills__cards">
          {skills.map((skill, index) => {
            return (
              <div className="profile__skills__card" key={skill.id}>
                <div className="profile__skills__card__header">
                  <img src={skill.image} alt="..." />
                  <h4 className="profile__skills__card__title">{skill.name}</h4>
                </div>
                <ul className="profile__skills__card__skills">
                  {itemContent(skill.items)}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
