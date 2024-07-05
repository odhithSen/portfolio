import React from "react";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";

const Tech = (props) => {
  return (
    <motion.div variants={fadeIn("right", "spring", props.index * 0.05, 0.75)}>
      <div className="w-16 h-16 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
        <img src={props.icon} alt={props.name} />
      </div>
    </motion.div>
  );
};

export default Tech;
