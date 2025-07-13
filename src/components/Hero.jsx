import { motion } from "framer-motion";

import { styles } from "../styles";
import { me } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className="paddingX absolute inset-0 top-[90px] md:top-[150px] max-w-7xl 
        mx-auto flex flex-col md:flex-row items-center md:items-start gap-5"
      >
        <img
          src={me}
          alt="Odhith"
          className="w-[220px] h-[220px] md:w-[350px] 
        md:h-[350px] rounded-full border-[5px] border-[#915eff] hover:scale-105 
        transition-all ease-in-out duration-500 ml-5"
        />
        <div className="flex flex-row gap-5 ">
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#915EFF]">Odhith</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Software Engineer | Visiting Lecturer | Researcher
              <br className="sm:block hidden" />
              Entrepreneur | Robotics and Tech Enthusiast
            </p>
          </div>
        </div>
      </div>
      <div className="absolute xs:bottom-20 bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
