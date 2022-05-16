import imgOne from "../../assets/images/marchendiseOne.png";
import imgTwo from "../../assets/images/marchendiseTwo.png";
import imgThree from "../../assets/images/marchendiseThree.png";
import imgFour from "../../assets/images/marchendiseFour.png";

const BigBangShop = () => {
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
    <section className="bg-customGray h-full w-full mt-40 pb-20">
      <div className="customContainer">
        <div className="text-center pb-10 pt-28">
          <h2 className="text-4xl font-bold pb-8 text-black">Big Bank Shop</h2>
          <div className="w-40 h-1 bg-primary m-auto"></div>
          <p className="text-gray-400 w-[60%] text-2xl py-4 m-auto">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          </p>
        </div>
        <div className="grid grid-cols-4 gap-x-4 gap-y-20">
          {marchendiseData.map((item, index) => (
            <div key={index} className="rounded-2xl flex flex-col items-center">
              <img src={item.img} alt="" className="w-full rounded-2xl" />
              <h2 className="text-3xl font-bold py-6">{item.title}</h2>
              <p className="text-primary text-2xl">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BigBangShop;
