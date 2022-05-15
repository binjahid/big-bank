import money from "../../assets/images/money.png";
import treasury from "../../assets/images/treasury.png";
import piggyBank from "../../assets/images/piggyBnak.png";
import locker from "../../assets/images/locker.png";

import "./NFTCollection.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const NFTCollection = () => {
  return (
    <section className="bg-quaternary h-full w-full mt-40">
      <div className="customContainer">
        <div className="text-center pb-10 pt-28">
          <h2 className="text-4xl font-bold w-[90%] pb-8 text-white">
            WILL YOU BE ACCEPTED AS THE BEST AMONG THE BEST?
          </h2>
          <div className="w-40 h-1 bg-primary m-auto"></div>
          <p className="text-gray-400 w-[60%] text-2xl py-4 m-auto">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          </p>
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
