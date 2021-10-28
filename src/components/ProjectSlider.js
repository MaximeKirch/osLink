import React from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation} from 'swiper';
import projects from '../data/projects';
import ProjectList from './ProjectList';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation]);

const ProjectSlider = () => {
    return (
        <div>

            <div className="projects-items">
                
                <Swiper
                spaceBetween={30}
                slidesPerView={3}
                navigation
                breakpoints={
                    {
                        // quand la largeur d'écran est >=100 alors j'ai 1 slide
                        100: {
                            slidesPerView: 1,
                        },

                        // quand la largeur d'écran est >=768 alors j'ai 2 slides

                        768: {
                            slidesPerview: 2,
                        },

                        // quand la largeur d'écran est >=1200 alors j'ai 3 slides

                        1200: {
                            slidesPerView: 3,
                        },
                    }
                }
                >

                    {projects.map((project, index) => {
                        if (index >= 6) return;
                        return (
                            <SwiperSlide key={project.id}>

                                <ProjectList
                                    item={project}
                                />

                            </SwiperSlide>
                        )

                    })}
                </Swiper>
            </div>
            
        </div>
    );
};

export default ProjectSlider;