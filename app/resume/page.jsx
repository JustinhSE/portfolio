"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiNextdotjs, SiTailwindcss, SiFirebase } from "react-icons/si";
const about = {
  title: "About me",
  description: " Who am I?",
  info: [
    { fieldName: "👤 Name ", fieldValue: "Justin Harper " },
    // { fieldName: "📞 Phone ", fieldValue: "(631) 449 5897 " },
    { fieldName: " 💻 Coding Expertise", fieldValue: "3+ Years " },
    { fieldName: "🎓 Major ", fieldValue: "Computer Science" },
    { fieldName: "🇭🇹 Nationality", fieldValue: "Haitian " },
    {
      fieldName: "🎲 Hobby",
      fieldValue: 'Yo-yoing' ,
    },
    { fieldName: "🗣️ Languages", fieldValue: "French " },
  ],
};

const experience = {
  icon: "/assests/resume/badge.svg",
  title: "My experience",
  description: "Where have I made an impact?",
  items: [
    {
      image: "/images.png",
      company: "GoDaddy",
      position: "Software Engineering Bootcamp Intern",
      duration: "June 2024 - July 2024 ",
    },

    {
      image: "/ct.png",
      company: "Cornell Tech",
      position: "Software Engineering Intern",
      duration: "July 2022 - September 2022",
    },
  ],
};

const education = {
  icon: "/assests/resume/cap.svg",
  title: "My education",
  description: "Where have I learned? ",
  items: [
    {
      image: '/sbu.jpg',
      institution: "Stony Brook University",
      degree: "Bachelor of Science - Computer Science",
      duration: "August 2023 - Present",
    },
    {
      image: '/codepath.jpg',
      institution: "CodePath",
      degree: "Technical Interview Prep 102",
      duration: "June 2024 - August 2024",
    },
    {
      image: '/freecodecamp.png',
      institution: "FreeCodeCamp",
      degree: "Machine Learning with Python",
      duration: "December 2023 - February 2024",
    },
  ],
};
const skills = {
  title: "My skills",
  description: "Here is my tech stack! ",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiFirebase />,
      name: "firebase",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { motion } from "framer-motion";
import { ScrollArea } from "@radix-ui/react-scroll-area";
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience"> Experience </TabsTrigger>
            <TabsTrigger value="education"> Education </TabsTrigger>
            <TabsTrigger value="skills"> Skills </TabsTrigger>
            <TabsTrigger value="about"> About me </TabsTrigger>
          </TabsList>
          {/* content  */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}{" "}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[284px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="rounded-full overflow-hidden w-[100px] h-[100px]">
                            <img
                              src={item.image}
                              alt={item.company}
                              className="max-w-full max-h-full object-cover"
                            />
                          </span>
                          <span className="text-accent"> {item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}{" "}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[284px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="rounded-full overflow-hidden w-[100px] h-[100px]">
                            <img
                              src={item.image}
                              alt={item.institution}
                              className="max-w-full max-h-full object-cover"
                            />
                          </span>
                          <span className="text-accent">
                            {item.institution}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.duration}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className=" flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}{" "}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]  ">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {" "}
                                {skill.icon}{" "}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize"> {skill.name} </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px] ">
                <h3 className="text-4xl font-bold"> {about.title} </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {" "}
                  {about.description}{" "}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-x-5 gap-y-6 max-w-[620px] mx-auto xl:mx-0 ">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex  items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60"> {item.fieldName}</span>
                        <span className="text-xl"> {item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
