import plants from "../data/plants";

import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../redux/CartSlice";

import { toast } from "react-toastify";

import { FaCartPlus } from "react-icons/fa";

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const categories = ["Indoor", "Flower", "Outdoor"];

  return (
    <div className="product-container">
      <h1>Our Plants</h1>

      {categories.map((category) => (
        <div key={category}>
          <h2>{category} Plants</h2>

          <div className="product-grid">
            {plants

              .filter((plant) => plant.category === category)

              .map((plant) => (
                <div className="card" key={plant.id}>
                  <img src={plant.image} alt={plant.name} />

                  <h3>{plant.name}</h3>

                  <p>${plant.price}</p>

                  <button
                    disabled={cartItems.some((item) => item.id === plant.id)}
                    onClick={() => {
                      dispatch(addToCart(plant));

                      toast.success(`${plant.name} added to cart`);
                    }}
                  >
                    <FaCartPlus />

                    {cartItems.some((item) => item.id === plant.id)
                      ? "Added"
                      : "Add Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
