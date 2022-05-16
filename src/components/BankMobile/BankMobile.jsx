import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion } from "framer-motion";

import appImg from "../../assets/images/app.png";
import playStore from "../../assets/images/playStore.png";
import appStore from "../../assets/images/appstore.svg_768x297.png";

const BankMobile = () => {
  const { ref, inView, entry } = useInView();
  const titile = "BigBank Take Little Bank Mobile App".split("");

  useEffect(() => {}, [inView, entry]);

  return (
    <section className="pt-60">
      <div className="text-center">
        <h2 ref={ref} className="text-5xl font-bold py-5">
          {titile.map((item, index) => {
            return (
              <motion.span
                initial={{
                  opacity: 0,
                  x: -100,
                }}
                animate={{
                  opacity: inView ? 1 : 0,
                  x: inView ? 0 : -100,
                }}
                transition={{
                  delay: index * 0.03,
                  // duration: 0.3,
                  type: "spring",
                }}
                key={index}
              >
                {item}
              </motion.span>
            );
          })}
        </h2>
        <div className="w-48 h-1 m-auto bg-primary"></div>
        <motion.p
          initial={{
            opacity: 0,
            y: 300,
          }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 300,
          }}
          transition={{
            delay: 0.8,
            duration: 1,
            type: "spring",
          }}
          className="w-[40%] m-auto py-5"
        >
          dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
          voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea
        </motion.p>
      </div>
      <div ref={ref} className="flex justify-center pt-24">
        <motion.img
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: inView ? 1 : 0,
            opacity: inView ? 1 : 0,
          }}
          transition={{
            delay: 1,
            duration: 1,
            type: "spring",
          }}
          src={appImg}
          alt=""
          className="w-full shrink-0"
        />
      </div>
      {/* <div className="flex w-[30%]">
        <img src={playStore} alt="" className="h-[10rem] w-auto" />
        <img src={appStore} alt="" className="h-[10rem] w-auto" />
      </div> */}
      <svg path=""></svg>
    </section>
  );
};

export default BankMobile;
