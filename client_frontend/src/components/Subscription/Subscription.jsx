import "./Subscription.css";

const Subscription = () => {
  return (
    <section className="partnerWrapper">
      <div className="paddings innerWidth partner-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Elevate Your Coffee Ritual</span>
          <span className="secondaryText">
            Dive into Personalized Subscription Delights
          </span>
          <button className="subscriptionBtn">
            <a href="mailto:hyunm@alumni.cmu.edu">Start</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
