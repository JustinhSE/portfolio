"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.5, ease: [0.0, 0.0, 0.2, 1] },
  }),
};

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-12">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none max-w-[500px]">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2.2}
              className="text-xl ml-2"
            >
              Founder | Speaker | Developer
            </motion.span>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2.4}
              className="py-3"
            >
              Hello I&apos;m
              <br />
              <span className="text-accent">Justin Harper</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2.6}
              className="mb-9 text-white/80 py-3 leading-relaxed"
            >
              Welcome to my page! I am excited to see you here, feel free to
              look around!
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2.8}
              className="flex flex-col xl:flex-row items-center gap-8"
            >
              <Link
                href="https://docs.google.com/document/d/1xPg2iUzfwoqw4wBKUJRklEBYU5AY5_uOEYo1njMQMH0/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download Resume</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-11 h-11 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                />
              </div>
            </motion.div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
