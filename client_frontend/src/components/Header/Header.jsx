import { useState } from "react";
import "./Header.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { BsBasket3 } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };
  return (
    <section className="headerWrapper" style={{ background: "#ffffff" }}>
      <div className="innerWidth paddings headerContainer">
        <img src="/coffeetoLogo.png" alt="logo" width={100} />

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            className="flexCenter headerMenu"
            style={getMenuStyles(menuOpened)}
          >
            <a href="/shop">Shop</a>
            <a href="/gift">Gift</a>
            <a href="/tool">Tool</a>
            <a href="/discover">Discover</a>
            <div className="search-bar">
              <input type="text" className="inputText" />
              <button className="tertiaryButton">
                <FaMagnifyingGlass color="var(--orange)" />
              </button>
            </div>
            <button className="tertiaryButton">
              <CiHeart color="var(--orange)" size={22} />
            </button>
            <button className="tertiaryButton">
              <BsBasket3 color="var(--orange)" size={20} />
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
