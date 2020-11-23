import React, { useEffect } from 'react';
import workData from './workData';
import './WorkExperience.scss';

const WorkExperience = (props) => {
  useEffect(() => {
    const showDiv = document.getElementsByClassName('profile__works');
    if (props.scrollPosition > 1050) {
      showDiv[0].style.opacity = 1;
    } else {
      showDiv[0].style.opacity = 0;
    }
  });

  return (
    <div className="profile__works">
      <div className="profile__works__column left">
        <h1>WORK HISTORY</h1>
      </div>
      <div className="profile__works__column right">
        <div className="profile__works__timeline">
          {workData.map((work) => {
            return (
              <div
                className="profile__works__timeline__item"
                key={work.id}
                date-is={work.date}
              >
                <h3>{work.name}</h3>
                <h4>{work.place}</h4>
                <h5>{work.type}</h5>
                <p>{work.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
