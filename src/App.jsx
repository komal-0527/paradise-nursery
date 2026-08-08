import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import AboutUs from "./components/AboutUs";

import ProductList from "./components/ProductList";

import CartItem from "./components/CartItem";

import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <div className="landing">
              <h1>🌿 Paradise Nursery</h1>

              <p>Bring nature into your home</p>

              <Link to="/plants">
                <button>Get Started</button>
              </Link>

              <AboutUs />
            </div>
          }
        />

        <Route path="/plants" element={<ProductList />} />

        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </>
  );
}

export default App;
