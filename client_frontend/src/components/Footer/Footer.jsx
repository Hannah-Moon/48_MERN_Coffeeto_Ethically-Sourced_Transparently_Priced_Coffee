import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <div className="flexCenter f-menu">
            <span>Shop</span>
            <span>Gift</span>
            <span>Tool</span>
            <span>Discover</span>
          </div>
        </div>

        {/* center */}
        <div className="flexColStart f-center">
          <span className="f-menu">Contact</span>
          <span className="secondaryText">
            25 Seoul Spring Blvd, Pittsburgh, PA
          </span>
          <span className="secondaryText">tel: 412-123-3456</span>
        </div>

        {/* right side */}
        <div className="flexColStart f-right">
          <img src="/coffeetoLogo.png" alt="" width={120} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
