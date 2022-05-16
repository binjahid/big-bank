import { motion } from "framer-motion";

import Header from "../Header/Header";
import bannerImg from "../../assets/images/logoAndBanner.png";

const Banner = () => {
  return (
    <div className="py-4 h-screen w-full bg-primary">
      <Header />
      <div className="grid grid-cols-bannerGrid customContainer pt-20">
        <div className="flex justify-center items-center">
          <div>
            <motion.div
              initial={{
                y: "-100vh",
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 1,
                type: "spring",
                stiffness: 100,
              }}
              className="text-7xl text-white font-bold"
            >
              <h2>
                Play the{" "}
                <span className="bg-secondary pb-[15px] px-4 rounded-xl">
                  most popular
                </span>
              </h2>
              <h2 className="pt-8">game of 2023 virtually</h2>
            </motion.div>
            <motion.div
              initial={{
                y: 300,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.5,
                duration: 0.5,
                type: "tween",
              }}
            >
              <p className="py-12 text-2xl text-gray-300">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              </p>
              <button className="text-white px-20 py-4 bg-tertiary text-2xl rounded-lg border-[.5rem] border-secondary">
                Play Now
              </button>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{
            y: 300,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
            duration: 0.5,
            type: "tween",
          }}
          className="flex justify-center"
        >
          <img src={bannerImg} alt="banner" className="w-80 h-auto" />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
