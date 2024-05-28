// Import Route and our components
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import Gift from "./pages/Gift.jsx";
import Tool from "./pages/Tool.jsx";
import Discover from "./pages/Discover.jsx";
import Favorite from "./pages/Favorite.jsx";
import Cart from "./pages/Cart.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/gift" element={<Gift />} />
          <Route path="/tool" element={<Tool />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
