"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from '@/components/WorkSliderBtns'
const projects = [
  {
    num: '01',
    category: "Full Stack",
    title: "project 1",
    description: "Recipe Recommendation System",
    stack: [{ name: "React.js + Vite" }, { name: "Tailwind CSS" }, { name: "Google Firebase" }, { name: "Cloud Firestore" }, ],
    image: "/cook.png",
    live: "",
    github: "https://github.com/JustinhSE/recipe-recommendation-system",
  },
  {
    num: "02",
    category: "Backend",
    title: "project 2",
    description: "Google Chrome Extension - Heatmap Generator",
    stack: [{ name: "JavaScript" }, { name: "Node.js" }, { name: "JSON" }, { name: "CSS 3" },],
    image: "/heatmap.jpeg",
    live: "",
    github: "https://github.com/JustinhSE/GoAnalytics/tree/main",
  },
  {
    num: "03",
    category: "Robotics/Autonomous",
    title: "project 3",
    description: "Data Collection for robotics simulations",
    stack: [{ name: "Python" }, { name: "ROS" }, { name: "Unity" }, { name: "C#" }, ],
    image: "/robotics.jpg",
    live: "",
    github: "https://github.com/JustinhSE/Data-Collection",
  },
  // {
  //   num: "04",
  //   category: "Robotics/Autonomous",
  //   title: "project 3",
  //   description: "Data Collection for robotics simulations",
  //   stack: [{ name: "Python" }, { name: "Robot Operating System(ROS)" }, { name: "Unity" }, { name: "C#" }, ],
  //   image: "/robotics.jpg",
  //   live: "",
  //   github: "https://github.com/JustinhSE/Data-Collection",
  // },
];
const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]); 
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition : {delay : 2.4, duration: .4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Outline num */}
              <div className="text-8xl leading-none font-extrabold ">
                {project.num}
              </div>

              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60"> {project.description} </p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"> </div>
              {/* button */}
              <div className="flex items-center gap-4">
                {/* live project button - deployed projects */}
                {/* <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover: text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link> */}
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover: text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
              {projects.map((project,index) => {
                return <SwiperSlide key = {index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className=" absolute top-0 bottom- 0 w-full h-full bg-black/10 z-10">
                    </div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image src = {project.image} fill className='object-cover' alt = '' /> 
                    </div>
                  </div>
                </SwiperSlide>
              })}
              {/* slider buttons */}
              <WorkSliderBtns containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none '/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
