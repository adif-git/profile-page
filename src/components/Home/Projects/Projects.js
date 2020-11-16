import React from 'react'
import projectsList from '../contents/Projects'
import SwiperCore, {Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import './Projects.css'

const Projects = props => {
    SwiperCore.use([Navigation, Pagination]);

    const tagsContent = tagsList => {
        let content = []
        for(let idx in tagsList){
            content.push(
                <div className="tag" key={tagsList[idx]}>{tagsList[idx]}</div>
            );
        }
        return content
    };

    return(
        <div className='projects'>
            <Swiper
                navigation
                pagination=
                    {{
                        dynamicBullets: true
                    }}
                id='projects-content'
                spaceBetween={50}
                slidesPerView={1}
                >
                {projectsList.map((project)=>{
                    return(
                        <SwiperSlide key={project.id}>
                            <img
                                src={project.image} 
                                alt='...'
                                >
                            </img>
                            <h3>{project.name}</h3>
                            <div className='description'>
                                <div className='source'>
                                    {project.github !== '' ? 
                                        <a className="fa fa-github" href={project.github} aria-hidden={false} target="_blank" rel="noopener noreferrer">{null}</a>
                                        : null}
                                    {project.link !== '' ? 
                                        <a className="fa fa-link" href={project.link} aria-hidden={false} target="_blank" rel="noopener noreferrer">{null}</a>
                                        : null}
                                    {project.video !== '' ? 
                                        <a className="fa fa-film" href={project.video} aria-hidden={false} target="_blank" rel="noopener noreferrer">{null}</a>
                                        : null}
                                </div>
                                <p>{project.description}</p>
                                <div className='tags'>
                                    {tagsContent(project.tags)}
                                </div>
                            </div>
                        </SwiperSlide>
                )})}
            </Swiper>
        </div>
    )
}

export default Projects