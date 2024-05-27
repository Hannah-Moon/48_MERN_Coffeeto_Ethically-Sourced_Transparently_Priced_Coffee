import "./Coffeeto.css";
import CountUp from "react-countup";

const Coffeeto = () => {
  return (
    <section className="flexColStart coffeetoWrapper">
      <div className="padding innerWidth coffeetoContainer">
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
              <button className="button">Shop Now</button>
            </div>

            <div className="flexStart stats">
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={1} end={100} duration={3} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Registered coffee</span>
              </div>

              <div className="flexColCenter stat">
                <span>
                  <CountUp start={1} end={20} duration={3} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Global Brewers</span>
              </div>

              <div className="flexColCenter stat">
                <span>
                  <CountUp start={1} end={5} duration={3} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Corporate Parts</span>
              </div>
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
