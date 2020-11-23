import React, { useState } from 'react';
import projectsData from './ProjectsData';
import Modal from './Modal';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import './Projects.scss';

const Projects = (props) => {
  SwiperCore.use([Navigation, Pagination]);

  const [showModal, setShowModal] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);

  const handleOpenModal = (index) => {
    setShowModal(!showModal);
    setProjectIndex(index);
  };

  const handleCloseModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Modal
        show={showModal}
        projectIndex={projectIndex}
        onClose={handleCloseModal}
      />
      <Swiper
        slidesPerColumn={2}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            freeMode: true,
            draggable: true,
          },
          1024: {
            slidesPerView: 3,
            slidesPerColumn: 2,
            freeMode: true,
            draggable: true,
          },
        }}
        navigation
        pagination={{
          type: 'progressbar',
        }}
        id="projects"
        freeMode="true"
        draggable="true"
      >
        {projectsData.map((project, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                src={project.image}
                alt="..."
                onClick={() => handleOpenModal(index)}
              ></img>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Projects;
