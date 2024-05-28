import { useNavigate } from "react-router-dom";
import "./Coffeeto.css";

const Coffeeto = () => {
  const navigate = useNavigate();
  return (
    <section className="flexColStart coffeeto-wrapper">
      <div className="padding innerWidth coffeeto-container">
        {/* left side */}
        <div className="coffeeto-left">
          <div className="coffeeto-title">
            <h1>
              Ethically Sourced, Transparently Priced Coffee for a Better World
            </h1>
            <div className="coffeeto-description">
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
        <div className="flextCenter coffeeto-right">
          <div className="imageContainer"></div>
        </div>
      </div>
    </section>
  );
};

export default Coffeeto;
