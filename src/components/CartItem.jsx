import { useDispatch, useSelector } from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/CartSlice";

import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

import { toast } from "react-toastify";

function CartItem() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,

    0,
  );

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      <div className="cart-container">
        {items.length === 0 ? (
          <h2>Cart is empty</h2>
        ) : (
          items.map((item) => (
            <div className="cart-card" key={item.id}>
              <img src={item.image} alt={item.name} />

              <h3>{item.name}</h3>

              <p>Unit: ${item.price}</p>

              <p>Total: ${item.price * item.quantity}</p>

              <div className="quantity-box">
                <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                  <FaMinus />
                </button>

                <span>{item.quantity}</span>

                <button onClick={() => dispatch(increaseQuantity(item.id))}>
                  <FaPlus />
                </button>
              </div>

              <button
                onClick={() => {
                  dispatch(removeFromCart(item.id));

                  toast.error(`${item.name} removed`);
                }}
              >
                <FaTrash />
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      <h2>Total Amount: ${total}</h2>

      <button onClick={() => toast.info("Checkout Coming Soon")}>
        Checkout
      </button>
    </div>
  );
}

export default CartItem;
