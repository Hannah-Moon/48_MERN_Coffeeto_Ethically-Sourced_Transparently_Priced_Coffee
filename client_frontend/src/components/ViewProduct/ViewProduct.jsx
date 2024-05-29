import "./ViewProduct.css";
import { useNavigate } from "react-router-dom";

const ViewProduct = () => {
  const navigate = useNavigate();
  return (
    <section className="flexColStart productView-wrapper">
      <div className="padding innerWidth productView-container">
        {/* left side */}
        <div className="productView-left">
          <div className="productView-title">
            <h1>
              Ethically Sourced, Transparently Priced Coffee for a Better World
            </h1>
            <div className="productView-description">
              <p>
                Millions of coffee lovers choose our ethically sourced and
                transparently priced coffee to enjoy a pure brew while
                supporting fair practices. Join us in brewing a better world,
                one cup at a time.
              </p>
            </div>
            <div className="flextCenter shopBttn">
              <button
                className="button"
                onClick={() => {
                  console.log("Clicked");
                  navigate("/shop");
                }}
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="flextCenter productView-right">
          <div className="imageContainer"></div>
        </div>
      </div>
      <div className="product-wrapper"></div>
    </section>
  );
};

export default ViewProduct;
