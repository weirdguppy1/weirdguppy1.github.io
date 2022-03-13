import { motion } from "framer-motion";
import React from "react";

const ProgressBar = (props) => {
  return (
    <motion.div
      className="relative pt-1 mt-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: props.duration || 1, duration: 0.5 }}
    >
      <h1 className="text-sm sm:text-md md:text-lg ">{props.title}</h1>

      <div
        className={`overflow-hidden h-2 mb-4 text-xs flex rounded bg-${
          props.color || "pink"
        }-400`}
      >
        <div
          style={{ width: `${props.width}%` }}
          className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-${
            props.color || "pink"
          }-700`}
        ></div>
      </div>
    </motion.div>
  );
};

export default ProgressBar;
