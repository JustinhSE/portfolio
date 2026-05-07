"use client";

import { motion } from "framer-motion";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const contactLinks = [
  {
    icon: <MdMarkEmailUnread className="text-2xl" />,
    label: "Email Me",
    href: "mailto:justinh.tech1@gmail.com",
    description: "justinh.tech1@gmail.com",
  },
  {
    icon: <FaGithub className="text-2xl" />,
    label: "GitHub",
    href: "https://github.com/justinhse",
    description: "@justinhse",
  },
  {
    icon: <FaLinkedinIn className="text-2xl" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/justinhtech",
    description: "/in/justinhtech",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2.4, duration: 0.5, ease: [0.0, 0.0, 0.2, 1] }}
      className="min-h-[80vh] flex flex-col items-center justify-center py-12"
    >
      <div className="container mx-auto flex flex-col items-center gap-12">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl xl:text-5xl font-bold mb-4">
            Let&apos;s <span className="text-accent">Connect</span>
          </h2>
          <p className="text-white/60 max-w-[480px] leading-relaxed">
            I&apos;m open to new opportunities and collaborations. Feel free to
            reach out through any of the channels below.
          </p>
        </div>

        {/* Contact cards */}
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-[700px]">
          {contactLinks.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 2.6 + index * 0.1,
                duration: 0.4,
                ease: [0.0, 0.0, 0.2, 1],
              }}
            >
              <Link
                href={item.href}
                target={item.href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 bg-surface rounded-xl p-6 border border-white/10 hover:border-accent/50 card-hover shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span className="w-14 h-14 rounded-full border border-accent flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-primary transition-all duration-200">
                  {item.icon}
                </span>
                <div className="text-center">
                  <p className="font-semibold text-white group-hover:text-accent transition-colors duration-200">
                    {item.label}
                  </p>
                  <p className="text-sm text-white/50 mt-1">{item.description}</p>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default Contact;
