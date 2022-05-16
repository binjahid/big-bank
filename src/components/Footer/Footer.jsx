const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 text-center bg-quaternary">
      <h2 className="text-white text-2xl font-semibold">
        Big Bank Take Little Bank, LLC, Copyright {year}, Trademarked {year},
        All rights reserved
      </h2>
    </footer>
  );
};

export default Footer;
