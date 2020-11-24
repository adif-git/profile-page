import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

import { projectsData } from './assets/data';
import './Modal.scss';

const Modal = (props) => {
  if (!props.show) {
    return null;
  }

  SwiperCore.use([Navigation, Pagination]);

  const tagsContent = (tagsList) => {
    let content = [];
    for (let idx in tagsList) {
      content.push(
        <div className="project__tags__list" key={tagsList[idx]}>
          {tagsList[idx]}
        </div>
      );
    }
    return content;
  };

  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      initialSlide={props.projectIndex}
      spaceBetween={50}
      slidesPerView={1}
      id="project__modal"
    >
      {projectsData.map((project, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="project__modal__header">
              <h3>{project.name}</h3>
              <div className="project__source">
                {/* Check if github/link/video available */}
                {project.github !== '' ? (
                  <a
                    className="fa fa-github"
                    href={project.github}
                    aria-hidden={false}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {null}
                  </a>
                ) : null}
                {project.link !== '' ? (
                  <a
                    className="fa fa-link"
                    href={project.link}
                    aria-hidden={false}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {null}
                  </a>
                ) : null}
                {project.video !== '' ? (
                  <a
                    className="fa fa-film"
                    href={project.video}
                    aria-hidden={false}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {null}
                  </a>
                ) : null}
              </div>
            </div>
            <div className="project__modal__body">
              <div className="project__image">
                <img src={project.image} alt="..."></img>
              </div>
              <div className="project__description">
                <div className="project__tags">{tagsContent(project.tags)}</div>
                <p>{project.description}</p>
              </div>
            </div>
            <div className="project__modal__footer">
              <button
                onClick={(e) => {
                  props.onClose && props.onClose(e);
                }}
              >
                Close
              </button>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Modal;
