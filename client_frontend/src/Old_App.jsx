import Header from "./components/Header/Header.jsx";
import Coffeeto from "./components/Coffeeto/Coffeeto.jsx";
import Companies from "./components/Companies/Companies.jsx";
import PopularCoffees from "./components/PopularCoffees/PopularCoffees.jsx";
import TransparentPricing from "./components/TransparentPricing/TransparentPricing.jsx";
import MarketReport from "./components/MarketReport/MarketReport.jsx";
import Subscription from "./components/Subscription/Subscription.jsx";
import Footer from "./components/Footer/Footer.jsx";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <div className="grey-gradient">
          <Header />
          <Coffeeto />
        </div>
        <Companies />
        <TransparentPricing />
        <MarketReport />
        <PopularCoffees />
        <Subscription />
        <Footer />
      </div>
    </div>
  );
}

export default App;
