import piggyBank from "../../assets/images/piggyBnak.png";

const PiggyBank = () => {
  return (
    <>
      <div>
        <img src={piggyBank} alt="" className="w-[80%] m-auto" />
      </div>
      <div className="flex items-center">
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
      </div>
    </>
  );
};

export default PiggyBank;