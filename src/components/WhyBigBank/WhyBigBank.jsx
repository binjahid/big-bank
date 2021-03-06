import Locker from "./Locker";
import Money from "./Money";
import PiggyBank from "./PiggyBank";
import PiggyBank2 from "./PiggyBank2";
import Treasury from "./Treasury";

const WhyBigBank = () => {
  return (
    <section
      className="h-full w-full bg-lines bg-no-repeat bg-center"
      style={{
        backgroundSize: "100% 100%",
      }}
    >
      <div className="grid grid-cols-2 customContainer gap-x-20 gap-y-40">
        <Money />
        <Treasury />
        <PiggyBank />
        <PiggyBank2 />
        <Locker />
      </div>
    </section>
  );
};

export default WhyBigBank;
