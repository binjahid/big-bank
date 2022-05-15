import logo from "../../assets/images/logoAndBanner.png";

const Header = () => {
  return (
    <header className="customContainer">
      <div className="w-32">
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
};

export default Header;
