import Header from "./components/Header/Header.jsx";
import Coffeeto from "./components/Coffeeto/Coffeeto.jsx";
import Companies from "./components/Companies/Companies.jsx";
import PopularCoffees from "./components/PopularCoffees/PopularCoffees.jsx";

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
        <PopularCoffees />
      </div>
    </div>
  );
}

export default App;