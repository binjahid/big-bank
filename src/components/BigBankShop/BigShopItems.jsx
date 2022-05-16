import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import imgOne from "../../assets/images/marchendiseOne.png";
import imgTwo from "../../assets/images/marchendiseTwo.png";
import imgThree from "../../assets/images/marchendiseThree.png";
import imgFour from "../../assets/images/marchendiseFour.png";
const BigShopItems = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const marchendiseData = [
    {
      img: imgOne,
      title: "Marchandise Name",
      price: "$1,000.00",
    },
    {
      img: imgTwo,
      title: "Marchandise Name",
      price: "$1,000.00",
    },
    {
      img: imgThree,
      title: "Marchandise Name",
      price: "$1,000.00",
    },
    {
      img: imgFour,
      title: "Marchandise Name",
      price: "$1,000.00",
    },
    {
      img: imgOne,
      title: "Marchandise Name",
      price: "$1,000.00",
    },
    {
      img: imgTwo,
      title: "Marchandise Name",
      price: "$1,000.00",
    },
    {
      img: imgThree,
      title: "Marchandise Name",
      price: "$1,000.00",
    },
    {
      img: imgFour,
      title: "Marchandise Name",
      price: "$1,000.00",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-4 gap-x-4 gap-y-20" ref={ref}>
        {marchendiseData.map((item, index) => (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: inView ? 1 : 0,
            }}
            transition={{
              delay: index * 0.2,
              duration: 0.3,
            }}
            key={index}
            className="rounded-2xl flex flex-col items-center"
          >
            <img src={item.img} alt="" className="w-full rounded-2xl" />
            <h2 className="text-3xl font-bold py-6">{item.title}</h2>
            <p className="text-primary text-2xl">{item.price}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default BigShopItems;
