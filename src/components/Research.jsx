import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { research } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  icon,
  link,
  iconBg,
}) => {
  return (
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(link, "_blank")}
              className={`${iconBg} border-2 border-black-500 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer`}
            >
              <img
                src={icon}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 min-h-64">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
  );
};

const Research = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText} `}>My research work</p>
        <h2 className={`${styles.sectionHeadText}`}>Research.</h2>
      </div>

      <div className="w-full flex">
        <p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          My research work demonstrates my depth of knowledge and practical 
          expertise. Each project is concisely summarized and includes links 
          to full papers and additional resources. These works showcase my 
          proficiency in tackling intricate problems, utilizing a range of 
          methodologies, and making significant contributions to the field.
        </p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {research.map((research, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...research} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Research, "research");
