import "./ShopBanner.css";

const ShopBanner = () => {
  return (
    <section className="flexColStart shop-wrapper">
      <div className="padding innerWidth shop-container">
        {/* left side */}
        <div className="shop-left">
          <div className="shop-title">
            <h1>
              Your <br />
              Sustainable <br />
              Coffee Routine{" "}
            </h1>
            <div className="shop-description">
              <p>Ethically sourced, wallet-friendly prices.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopBanner;
