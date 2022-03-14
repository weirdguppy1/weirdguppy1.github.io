import React from "react";
import { motion } from "framer-motion";
import { WHO_AM_I } from "../content/content";
import Section from "../components/Section";
import Navbar from "../components/Navbar";
import Image from "../media/IMG_1945.jpg";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col justify-center items-center"
    >
      <Navbar />
      <motion.div
        whileHover={{
          rotate: 5,
          transition: { duration: 0.25 },
        }}
        className="mt-5"
      >
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-8xl lg:text-9xl">
          <span className=" bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-teal-500">
            About Me.
          </span>
        </h1>
      </motion.div>
      <div className="flex flex-col items-center max-w-xl">
        {"  "}
        <Section title="Who am I?">{WHO_AM_I}</Section>
        <img className="rounded-2xl shadow-xl" src={Image} />
      </div>
    </motion.div>
    // <motion.div
    //   initial={{ opacity: 0 }}
    //   animate={{ opacity: 1 }}
    //   transition={{ duration: 1 }}
    //   className="flex flex-col justify-center items-center"
    // >
    //   <Navbar />
    //   <motion.div
    //     whileHover={{
    //       rotate: 5,
    //       transition: { duration: 0.25 },
    //     }}
    //     className="mt-5"
    //   >
    //     <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-8xl lg:text-9xl">
    //       <span className=" bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-teal-500">
    //         About Me.
    //       </span>
    //     </h1>
    //   </motion.div>
    //   <div className="flex flex-col items-center max-w-lg">
    //     {WHO_AM_I}
    //     <img className="" src={Image}/>
    //   </div>
    // </motion.div>
  );
};

export default About;
