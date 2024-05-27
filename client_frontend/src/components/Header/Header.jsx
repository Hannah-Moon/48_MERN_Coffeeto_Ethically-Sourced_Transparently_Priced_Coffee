import "./Header.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { BsBasket3 } from "react-icons/bs";

const Header = () => {
  return (
    <section className="headerWrapper" style={{ background: "#ffffff" }}>
      <div className="innerWidth paddings headerContainer">
        <img src="/coffeetoLogo.png" alt="logo" width={100} />
        {/* https://img.freepik.com/free-photo/top-view-roasted-coffee-beans_23-2148336716.jpg?t=st=1716790676~exp=1716794276~hmac=bd108aacc6bc0cc21b938226e0ba41f05a96a08a8f154f4caeb2632a39e434d6&w=1380 */}

        <div className="flexCenter headerMenu">
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
      </div>
    </section>
  );
};

export default Header;
