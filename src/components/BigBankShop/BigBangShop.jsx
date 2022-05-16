import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import BigShopItems from "./BigShopItems";

const BigBangShop = () => {
  const title = "Big Bank Shop".split("");

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      className="bg-customGray h-full w-full mt-40 pb-20"
      ref={ref}
      id="marchandise"
    >
      <div className="customContainer">
        <div className="text-center pb-10 pt-28">
          <h2 className="text-4xl font-bold pb-8 text-black">
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
        <BigShopItems />
      </div>
    </section>
  );
};

export default BigBangShop;
