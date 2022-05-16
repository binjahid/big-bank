import BankMobile from "../../components/BankMobile/BankMobile";
import Banner from "../../components/Banner/Banner";
import BigBangShop from "../../components/BigBankShop/BigBangShop";
import Footer from "../../components/Footer/Footer";
import NFTCollection from "../../components/NFTCollection/NFTCollection";
import WhyBigBank from "../../components/WhyBigBank/WhyBigBank";

const Home = () => {
  return (
    <>
      <Banner />
      <BankMobile />
      <WhyBigBank />
      <NFTCollection />
      <BigBangShop />
      <Footer />
    </>
  );
};

export default Home;
