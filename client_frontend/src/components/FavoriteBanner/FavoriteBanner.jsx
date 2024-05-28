import "./FavoriteBanner.css";

const FavoriteBanner = () => {
  return (
    <section className="flexColStart favorite-wrapper">
      <div className="padding innerWidth favorite-container">
        {/* left side */}
        <div className="favorite-left">
          <div className="favorite-title">
            <h1>
              Your <br />
              Personal <br />
              Coffee Library
            </h1>
            <div className="favorite-description">
              <p>
                Step into your personal coffee gallery, where every saved Coffee
                is worth revisiting
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FavoriteBanner;
