import React from 'react';
import Swiper, { SwiperSlide } from 'swiper/react';
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
                slidesPerView={1}
                navigation>

                    {projects.map((project, index) => {
                        if (index >= 3) return;
                        return (
                            <SwiperSlide key={project.id}>

                                <ProjectList/>

                            </SwiperSlide>
                        )

                    })}
                </Swiper>
            </div>
            
        </div>
    );
};

export default ProjectSlider;