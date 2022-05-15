import appImg from "../../assets/images/app.png";
import playStore from "../../assets/images/playStore.png";
import appStore from "../../assets/images/appstore.svg_768x297.png";

const BankMobile = () => {
  return (
    <section className="pt-60">
      <div className="text-center">
        <h2 className="text-5xl font-bold py-5">
          BigBank Take Little Bank Mobile App
        </h2>
        <div className="w-48 h-1 m-auto bg-primary"></div>
        <p className="w-[40%] m-auto py-5 ">
          dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
          tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
          voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          Stet clita kasd gubergren, no sea
        </p>
      </div>
      <div className="flex justify-center pt-24">
        <img src={appImg} alt="" className="w-full shrink-0" />
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
