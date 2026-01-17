import React from "react";

import first from "../../assets/Images/first.jpg";
import second from "../../assets/Images/second.jpg";
import third from "../../assets/Images/third.jpg";
import fourth from "../../assets/Images/fourth.jpg";


const ProjectCard = ({image,text1,text2, para}) => {
  return (
    <div data-aos="fade-left" className="p-4">
            <div className="relative overflow-hidden">
              <img
                src={image}
                className="h-70 w-full object-cover rounded-xl"
              />
              <div data-aos="fade-left" data-aos-delay="100" className="absolute right-4 top-4 text-xl px-3 py-2 bg-white rounded-full hover:bg-violet-600 hover:text-white cursor-pointer transition-all ease-linear">
                <i className="ri-arrow-right-up-long-line"></i>
              </div>
              <div className="px-4 py-1 bg-white rounded-2xl absolute bottom-4 left-4">
               {text1}
              </div>
            </div>
            <h5 className="text-xl pt-4 text-pink-600">{text2}</h5>
            <span className="text-[.75rem] text-gray-400">
              {para}
            </span>
          </div>
  )
}



const Projects = () => {
  return (
    <div className="my-5 mx-4 px-4 md:mt-10 py-2 md:pt-6">
      <div data-aos="fade-up" className="flex flex-col md:flex-row text-center md:justify-between md:items-center gap-2">
        <h6 className="text-xl md:text-3xl xl:text-4xl">Recent Projects</h6>
        <span className="text-[.75rem] md:text-sm text-gray-500">
          Step into the world of our most recent projects, a showcase <br />
          of our unwavering commitment to progressive design
        </span>
      </div>

      <div data-aos="fade-up" className="md:px-8 md:pt-4 md:flex md:justify-center gap-12">

        <div className="grow shrink basis-1">
          <ProjectCard image={first} text1="2D Animation" text2="The Lighthouse" para=" Adding a new dimension to projects through thoughtfully design 2D
              animations" />

            <ProjectCard image={second} text1="Motion Graphics" text2="Navigating Possibilities" para=" Motion graphics breather lite into the project, blending direction
              and creativity" />
          

          
        </div>

        <div className="md:py-12 grow shrink basis-1">
          <ProjectCard image={third} text1="Visual Identity" text2="Snowscape Haven" para="Crafting a visual identity that mirrors the serenity and allure of
              a winter sanctuary" />
              <ProjectCard image={fourth} text1="3D Animation" text2="Nocturnal Symphony" para="Through 3D artistry, we orchestrate an animated cde to the
              evening, a dance of shadows and dreams" />
          

         

        </div>
      </div>
    </div>
  );
};

export default Projects;