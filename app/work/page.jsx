"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Full Stack",
    title: "project 1",
    description: "Recipe Recommendation System",
    stack: [
      { name: "React + TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Google Firebase" },
      { name: "Cloud Firestore" },
    ],
    image: "/cook.png",
    live: "",
    github: "https://github.com/JustinhSE/recipe-recommendation-system",
  },
  {
    num: "02",
    category: "Backend",
    title: "project 2",
    description: "Google Chrome Extension - Heatmap Generator",
    stack: [
      { name: "JavaScript" },
      { name: "Node.js" },
      { name: "JSON" },
      { name: "CSS 3" },
    ],
    image: "/heatmap.jpeg",
    live: "",
    github: "https://github.com/JustinhSE/GoAnalytics/tree/main",
  },
  {
    num: "03",
    category: "Robotics/Autonomous",
    title: "project 3",
    description: "Data Collection for robotics simulations",
    stack: [
      { name: "Python" },
      { name: "ROS" },
      { name: "Unity" },
      { name: "C#" },
    ],
    image: "/robotics.jpg",
    live: "",
    github: "https://github.com/JustinhSE/Data-Collection",
  },
  {
    num: "04",
    category: "Machine Learning",
    title: "project 4",
    description: "Open Source - Versify",
    stack: [
      { name: "Python" },
      { name: "Flask" },
      { name: "Typescript" },
      { name: "HTML" },
    ],
    image: "/image.png",
    live: "https://bible-verse-finder.vercel.app/",
    github: "https://github.com/Namit2111/bible-verse-finder",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Project info panel */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* Number */}
              <motion.div
                key={project.num}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="text-8xl leading-none font-extrabold text-white/20"
              >
                {project.num}
              </motion.div>

              {/* Category */}
              <motion.h2
                key={project.category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.05, ease: "easeOut" }}
                className="text-[42px] font-bold leading-none text-white capitalize"
              >
                {project.category} project
              </motion.h2>

              {/* Description */}
              <motion.p
                key={project.description}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-white/60"
              >
                {project.description}
              </motion.p>

              {/* Stack */}
              <motion.ul
                key={project.title + "-stack"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.15 }}
                className="flex flex-wrap gap-3"
              >
                {project.stack.map((item, index) => (
                  <li key={index} className="text-base text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </motion.ul>

              {/* Divider */}
              <div className="border border-white/20" />

              {/* Links */}
              <div className="flex items-center gap-4">
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-accent/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                        <BsGithub className="text-white text-3xl group-hover:text-accent transition-colors duration-200" />
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

          {/* Swiper */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((proj, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-surface overflow-hidden rounded-xl">
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-black/20 transition-colors duration-200" />
                    {/* Image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={proj.image}
                        fill
                        sizes="(max-width: 1200px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        alt={proj.description}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary w-[44px] h-[44px] flex justify-center items-center rounded-full transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                iconStyles="text-xl"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
