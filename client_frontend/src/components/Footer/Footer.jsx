import { useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="footer-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart footer-left">
          <div className="flexCenter footer-menu">
            <span
              onClick={() => {
                console.log("Clicked");
                navigate("/shop");
              }}
            >
              Shop
            </span>

            <span
              onClick={() => {
                console.log("Clicked");
                navigate("/gift");
              }}
            >
              Gift
            </span>

            <span
              onClick={() => {
                console.log("Clicked");
                navigate("/tool");
              }}
            >
              Tool
            </span>

            <span
              onClick={() => {
                console.log("Clicked");
                navigate("/collaboration");
              }}
            >
              Collaboration
            </span>
          </div>
        </div>

        {/* center */}
        <div className="flexColStart footer-center">
          <span className="footer-menu">Contact</span>
          <span className="secondaryText">
            25 Seoul Spring Blvd, Pittsburgh, PA
          </span>
          <span className="secondaryText">tel: 412-123-3456</span>
        </div>

        {/* right side */}
        <div className="flexColStart footer-right">
          <img
            src="/coffeetoLogo.png"
            alt=""
            width={120}
            onClick={() => {
              console.log("Clicked");
              navigate("/");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
