import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import { FaHome, FaLeaf, FaShoppingCart } from "react-icons/fa";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <nav className="navbar">
      <h2>🌿 Paradise Nursery</h2>

      <div>
        <Link to="/">
          <FaHome />
          Home
        </Link>

        <Link to="/plants">
          <FaLeaf />
          Plants
        </Link>

        <Link to="/cart">
          <FaShoppingCart />
          Cart ({cartItems.length})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
