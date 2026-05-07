"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiFirebase } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const about = {
  title: "About me",
  description: "Who am I?",
  info: [
    { fieldName: "👤 Name", fieldValue: "Justin Harper" },
    { fieldName: "💻 Coding Expertise", fieldValue: "3+ Years" },
    { fieldName: "🎓 Major", fieldValue: "Computer Science" },
    { fieldName: "🇭🇹 Nationality", fieldValue: "Haitian" },
    { fieldName: "🎲 Hobby", fieldValue: "Yo-yoing" },
    { fieldName: "🗣️ Languages", fieldValue: "French" },
  ],
};

const experience = {
  icon: "/assests/resume/badge.svg",
  title: "My experience",
  description: "Where have I made an impact?",
  items: [
    {
      image: "/wbd.png",
      company: "Warner Bros. Discovery",
      position: "Software Engineering Intern",
      duration: "June 2025 - August 2025",
    },
    {
      image: "/sbu2.png",
      company: "Stony Brook University",
      position: "Machine Learning Researcher",
      duration: "May 2024 - August 2024",
    },
    {
      image: "/images.png",
      company: "GoDaddy",
      position: "Software Engineering Intern",
      duration: "June 2024 - July 2024",
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
  description: "Where have I learned?",
  items: [
    {
      image: "/sbu.jpg",
      institution: "Stony Brook University",
      degree: "Bachelor of Science - Computer Science",
      duration: "August 2023 - Present",
    },
    {
      image: "/codepath.jpg",
      institution: "CodePath",
      degree: "Technical Interview Prep 102",
      duration: "June 2024 - August 2024",
    },
    {
      image: "/freecodecamp.png",
      institution: "FreeCodeCamp",
      degree: "Machine Learning with Python",
      duration: "December 2023 - February 2024",
    },
  ],
};

const skills = {
  title: "My skills",
  description: "Here is my tech stack!",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3 />, name: "CSS 3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiFirebase />, name: "Firebase" },
  ],
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: [0.0, 0.0, 0.2, 1] },
  }),
};

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
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="bg-surface h-[284px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 card-hover shadow-sm"
                      >
                        <span className="rounded-full overflow-hidden w-[100px] h-[100px] flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.company}
                            className="w-full h-full object-cover"
                          />
                        </span>
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent flex-shrink-0" />
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="bg-surface h-[284px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 card-hover shadow-sm"
                      >
                        <span className="rounded-full overflow-hidden w-[100px] h-[100px] flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.institution}
                            className="w-full h-full object-cover"
                          />
                        </span>
                        <span className="text-accent">{item.institution}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent flex-shrink-0" />
                          <p className="text-white/60">{item.duration}</p>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <motion.li
                      key={index}
                      custom={index}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-surface rounded-xl flex justify-center items-center group card-hover shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                            <div className="text-6xl group-hover:text-accent transition-colors duration-250">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-x-5 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <motion.li
                      key={index}
                      custom={index}
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </motion.li>
                  ))}
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
