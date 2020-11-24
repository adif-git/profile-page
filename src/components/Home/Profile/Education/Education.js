import React from 'react';
import { certificationsData } from './assets/data';
import GKS from './assets/img/GKS.jpg';
import './Education.scss';

const Education = (props) => {
  return (
    <div className="profile__education">
      <div className="profile__education__header">
        <h2>
          EDUCATION <span>.</span>
        </h2>
      </div>
      <div className="profile__education__body">
        <div className="profile__education__degree">
          <h3>Bachelor of Electrical Engineering</h3>
          <h4>Institut Teknologi Sepuluh Nopember</h4>
          <ul>
            <li>Concentration : Electronics</li>
            <li>GPA : 3.63 / 4.00</li>
          </ul>
        </div>
        <div className="profile__education__certificates">
          <h3>Certificates</h3>
          <div className="profile__education__certificates__cards">
            {certificationsData.map((certificate) => {
              return (
                <div
                  className="profile__education__certificates__card"
                  key={certificate.id}
                >
                  <h4>{certificate.title}</h4>
                  <h5>{certificate.organization}</h5>
                </div>
              );
            })}
          </div>
        </div>
        <div className="profile__education__achievement">
          <h3>Achievement</h3>
          <div className="profile__education__achievement__body">
            <div className="profile__education__achievement__img">
              <img src={GKS} alt="..."></img>
            </div>
            <div className="profile__education__achievement__info">
              <h4>
                Global Korean Scholarship (GKS) for ASEAN Countries Science and
                Engineering Students
              </h4>
              <h5>July 2017</h5>
              <p>
                One of the selected 120 ASEAN students for a month opportunity
                to study in South Korea which fully funded by South Korea's
                Ministry of Education consists of lab research, cultural
                activities, and lectures. Research topic about energy harvesting
                on power lines using electromagnetic field at Chung-Ang
                University, Seoul.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
