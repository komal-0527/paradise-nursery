import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="landing">
              <h1>Paradise Nursery</h1>

              <p>Beautiful plants for your beautiful home</p>

              <button>Get Started</button>

              <AboutUs />
            </div>
          }
        />

        <Route path="/plants" element={<ProductList />} />

        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
