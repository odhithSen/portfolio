import React from "react";
import { motion } from "framer-motion";

import { TechCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Languages, Frameworks, and Tools
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technologies.
        </h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
        {technologies.map((technology, index) => (
          <div className="w-16 h-16" key={technology.name}>
            <TechCanvas icon={technology.icon} name={technology.name} index={index} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
