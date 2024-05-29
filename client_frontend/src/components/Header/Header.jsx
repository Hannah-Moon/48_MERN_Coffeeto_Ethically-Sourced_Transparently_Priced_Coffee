import { useState, useContext } from "react";
import "./Header.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { BsBasket3 } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import OutsideClickHandler from "react-outside-click-handler";
import { useNavigate, Link } from "react-router-dom";
// import {CoffeeContext} from "../../context-and-reducer/CoffeeContext";
import { CoffeeContext } from "../../context-and-reducer/CoffeeContext";

const Header = () => {
  const navigate = useNavigate();

  const [menuOpened, setMenuOpened] = useState(false);

  // const { coffees } = useContext(CoffeeContext);
  const { coffees } = useContext(CoffeeContext);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };
  return (
    <section className="header-wrapper" style={{ background: "#ffffff" }}>
      <div className="innerWidth paddings header-container">
        <img
          src="/coffeetoLogo.png"
          alt="logo"
          className="CoffeetoLogo"
          width={100}
          onClick={() => {
            console.log("Clicked");
            // navigate("/HomePage");
            navigate("/");
          }}
        />

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            className="flexCenter header-menu"
            style={getMenuStyles(menuOpened)}
          >
            <Link to="/shop">Shop</Link>

            <Link to="/gift">Gift</Link>

            <Link to="/tool">Tool</Link>

            <Link to="/discover">Discover</Link>

            <div className="search-bar">
              <input type="text" className="inputText" />
              <button className="tertiaryButton">
                <FaMagnifyingGlass color="var(--orange)" />
              </button>
            </div>

            <button className="tertiaryButton">
              <CiHeart
                color="var(--orange)"
                size={22}
                onClick={() => {
                  console.log(
                    "Favorite button is selected. Taking users to the favorite screen."
                  );
                  navigate("/favorite");
                }}
              />{" "}
              {/* <span className="text-xs align-top bg-red-500 text-white rounded-full px-2 py-1 mx-1">
                {coffees.length}
              </span> */}
              <span className="text-xs align-top bg-red-500 text-white rounded-full px-2 py-1 mx-1">
                {coffees.length}
              </span>
            </button>

            <button className="tertiaryButton">
              <BsBasket3
                color="var(--orange)"
                size={20}
                onClick={() => {
                  console.log("Clicked");
                  navigate("/cart");
                }}
              />{" "}
            </button>
          </div>
        </OutsideClickHandler>

        <div
          className="hamberger-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <IoMenu size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
