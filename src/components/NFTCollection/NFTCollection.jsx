import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import money from "../../assets/images/money.png";
import treasury from "../../assets/images/treasury.png";
import piggyBank from "../../assets/images/piggyBnak.png";
import locker from "../../assets/images/locker.png";

import "./NFTCollection.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const NFTCollection = () => {
  const title = "WILL YOU BE ACCEPTED AS THE BEST AMONG THE BEST?".split("");

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section className="bg-quaternary h-full w-full mt-40" ref={ref} id="nft">
      <div className="customContainer">
        <div className="text-center pb-10 pt-28">
          <h2 className="text-4xl font-bold w-[90%] pb-8 text-white m-auto">
            {title.map((item, index) => {
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
                    delay: index * 0.05,
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
          <div className="w-40 h-1 bg-primary m-auto"></div>
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
            className="text-gray-400 w-[60%] text-2xl py-4 m-auto"
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          </motion.p>
        </div>
      </div>
      <div className="py-10">
        <div className=" overflow-hidden w-full">
          <div className="flex sliderTrack">
            <div className="sliderImg h-auto p-4 flex items-center">
              <img src={treasury} alt="" />
            </div>
            <div className="sliderImg h-auto p-4 flex items-center">
              <img src={money} alt="" />
            </div>
            <div className="sliderImg h-auto p-4 flex items-center">
              <img src={piggyBank} alt="" />
            </div>
            <div className="sliderImg h-auto p-4 flex items-center">
              <img src={locker} alt="" />
            </div>
            <div className="sliderImg h-auto p-4 flex items-center">
              <img src={treasury} alt="" className="w-full" />
            </div>
            <div className="sliderImg h-auto p-4 flex items-center">
              <img src={money} alt="" className="w-full" />
            </div>
            <div className="sliderImg h-auto p-4 flex items-center">
              <img src={piggyBank} alt="" />
            </div>
            <div className="sliderImg h-auto p-4 flex items-center">
              <img src={locker} alt="" />
            </div>
            <div className="sliderImg h-auto p-4 flex items-center">
              <img src={treasury} alt="" className="w-full" />
            </div>
            <div className="sliderImg h-auto p-4 flex items-center">
              <img src={money} alt="" className="w-full" />
            </div>
            <div className="sliderImg h-auto p-4 flex items-center">
              <img src={piggyBank} alt="" />
            </div>
            <div className="sliderImg h-auto p-4 flex items-center">
              <img src={locker} alt="" />
            </div>
            <div className="sliderImg h-auto p-4 flex items-center">
              <img src={treasury} alt="" className="w-full" />
            </div>
            <div className="sliderImg h-auto p-4 flex items-center">
              <img src={money} alt="" className="w-full" />
            </div>
            <div className="sliderImg h-auto p-4 flex items-center">
              <img src={piggyBank} alt="" />
            </div>
            <div className="sliderImg h-auto p-4 flex items-center">
              <img src={locker} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className=" overflow-hidden w-full">
          <div className="flex sliderTrack2">
            <div className="sliderImg h-auto p-4 flex items-center">
              <img src={treasury} alt="" />
            </div>
            <div className="sliderImg h-auto p-4 flex items-center">
              <img src={money} alt="" />
            </div>
            <div className="sliderImg h-auto p-4 flex items-center">
              <img src={piggyBank} alt="" />
            </div>
            <div className="sliderImg h-auto p-4 flex items-center">
              <img src={locker} alt="" />
            </div>
            <div className="sliderImg h-auto p-4 flex items-center">
              <img src={treasury} alt="" className="w-full" />
            </div>
            <div className="sliderImg h-auto p-4 flex items-center">
              <img src={money} alt="" className="w-full" />
            </div>
            <div className="sliderImg h-auto p-4 flex items-center">
              <img src={piggyBank} alt="" />
            </div>
            <div className="sliderImg h-auto p-4 flex items-center">
              <img src={locker} alt="" />
            </div>
            <div className="sliderImg h-auto p-4 flex items-center">
              <img src={treasury} alt="" className="w-full" />
            </div>
            <div className="sliderImg h-auto p-4 flex items-center">
              <img src={money} alt="" className="w-full" />
            </div>
            <div className="sliderImg h-auto p-4 flex items-center">
              <img src={piggyBank} alt="" />
            </div>
            <div className="sliderImg h-auto p-4 flex items-center">
              <img src={locker} alt="" />
            </div>
            <div className="sliderImg h-auto p-4 flex items-center">
              <img src={treasury} alt="" className="w-full" />
            </div>
            <div className="sliderImg h-auto p-4 flex items-center">
              <img src={money} alt="" className="w-full" />
            </div>
            <div className="sliderImg h-auto p-4 flex items-center">
              <img src={piggyBank} alt="" />
            </div>
            <div className="sliderImg h-auto p-4 flex items-center">
              <img src={locker} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NFTCollection;
