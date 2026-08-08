import plants from "../data/plants";

import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../redux/CartSlice";

import { Link } from "react-router-dom";

function ProductList() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.items);

  return (
    <>
      <nav className="navbar">
        <Link to="/">Home</Link>

        <Link to="/plants">Plants</Link>

        <Link to="/cart">Cart 🛒 {cart.length}</Link>
      </nav>

      <div className="product-container">
        {plants.map((plant) => (
          <div className="card" key={plant.id}>
            <img src={plant.image} />

            <h3>{plant.name}</h3>

            <p>${plant.price}</p>

            <button
              disabled={cart.some((item) => item.id === plant.id)}
              onClick={() => dispatch(addToCart(plant))}
            >
              {cart.some((item) => item.id === plant.id)
                ? "Added"
                : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;
