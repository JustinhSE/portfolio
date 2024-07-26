import React from "react";
import { MdMarkEmailUnread } from "react-icons/md";
import Link from "next/link";
import { motion } from "framer-motion";

const containerStyles = "flex justify-center items-center h-screen"; // Center the button vertically
const buttonStyles =
  "w-36 h-16 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500";
const textStyles = "ml-2"; // Add left margin to create spacing

const Contact = () => {
  return (
    <div className={containerStyles}>
      <Link href="mailto:justinh.tech1@gmail.com" className={buttonStyles}>
        <MdMarkEmailUnread />
        <span className={textStyles}>Email Me</span>
      </Link>
    </div>
  );
};
export default Contact;
