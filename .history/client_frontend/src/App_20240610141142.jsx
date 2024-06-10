// Import Route and our components
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import SingleProductDetail from "./pages/SingleProductDetail/SingleProductDetail.jsx";
import Gift from "./pages/Gift.jsx";
import Tool from "./pages/Tool.jsx";
import Collaboration from "./pages/Collaboration.jsx";
import Favorite from "./pages/Favorite.jsx";
import Cart from "./pages/Cart.jsx";
// import ASingleProduct from "./pages/ASingleProduct.jsx";
import { CoffeeProvider } from "./context-and-reducer/CoffeeContext.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import "./App.css";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <CoffeeProvider>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="/home" element={<Home />} />
              <Route path="/favorite" element={<Favorite />} />
              <Route path="/shop" element={<Shop />} />
              <Route
                path="/shop/product/:id"
                element={<SingleProductDetail />}
              />
              <Route path="/gift" element={<Gift />} />
              <Route path="/tool" element={<Tool />} />
              <Route path="/collaboration" element={<Collaboration />} />
              <Route path="/cart" element={<Cart />} />
              {/* <Route path="/shop/product" element={<ASingleProduct />} /> */}
            </Routes>
          </div>
        </CoffeeProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
