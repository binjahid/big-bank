import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

import locker from "../../assets/images/locker.png";

const Locker = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1.2]);

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <motion.div
        className="flex items-center"
        ref={ref}
        initial={{
          opacity: 0,
          y: 500,
        }}
        animate={{
          opacity: inView ? 1 : 0,
          y: inView ? 0 : 500,
        }}
        transition={{
          duration: 1,
          delay: 0.3,
          type: "spring",
        }}
      >
        <div>
          <h2 className="text-4xl font-bold w-[90%] pb-8">
            WILL YOU BE ACCEPTED AS THE BEST AMONG THE BEST?
          </h2>
          <div className="w-40 h-1 bg-primary"></div>
          <p className="text-gray-400 text-2xl py-4">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
          </p>
        </div>
      </motion.div>
      <div className="overflow-hidden">
        <motion.img
          style={{
            scale,
          }}
          src={locker}
          alt=""
          className="w-[100%] m-auto"
        />
      </div>
    </>
  );
};

export default Locker;
