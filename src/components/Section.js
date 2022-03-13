import { motion } from "framer-motion";
import React, { Children } from "react";

const Section = (props) => {
  return (
    <div className="container flex flex-col justify-center items-center p-4">
      <h1 className="md:text-2xl text-lg">{props.title}</h1>
      <div className="mt-5 max-w-lg">
        <motion.p className="md:text-lg text-sm ">{props.children}</motion.p>
      </div>
    </div>
  );
};

export default Section;
