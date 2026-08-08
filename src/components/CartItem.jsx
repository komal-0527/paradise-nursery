import { useDispatch, useSelector } from "react-redux";

import { removeItem, updateQuantity } from "../redux/CartSlice";

import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

import { toast } from "react-toastify";

import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items);

  const totalAmount = items.reduce(
    (total, item) => total + item.price * item.quantity,

    0,
  );

  return (
    <div className="cart-page">
      <h1>Shopping Cart 🛒</h1>

      {items.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        <div className="cart-container">
          {items.map((item) => (
            <div className="cart-card" key={item.id}>
              <img src={item.image} alt={item.name} />

              <h3>{item.name}</h3>

              <p>Unit Price: ${item.price}</p>

              <p>Total: ${item.price * item.quantity}</p>

              <div className="quantity-box">
                <button
                  onClick={() => {
                    dispatch(
                      updateQuantity({
                        id: item.id,

                        quantity: item.quantity - 1,
                      }),
                    );
                  }}
                >
                  <FaMinus />
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => {
                    dispatch(
                      updateQuantity({
                        id: item.id,

                        quantity: item.quantity + 1,
                      }),
                    );
                  }}
                >
                  <FaPlus />
                </button>
              </div>

              <button
                className="delete-btn"
                onClick={() => {
                  dispatch(removeItem(item.id));

                  toast.error(`${item.name} removed`);
                }}
              >
                <FaTrash />
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      <h2>Total Amount: ${totalAmount}</h2>

      <button onClick={() => toast.info("Checkout Coming Soon")}>
        Checkout
      </button>

      <br />
      <br />

      <Link to="/plants">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}

export default CartItem;
