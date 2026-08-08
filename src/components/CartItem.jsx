import { useSelector, useDispatch } from "react-redux";

import { increase, decrease, remove } from "../redux/CartSlice";

import { Link } from "react-router-dom";

function CartItem() {
  const items = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <>
      <nav className="navbar">
        <Link to="/">Home</Link>

        <Link to="/plants">Plants</Link>

        <Link to="/cart">Cart</Link>
      </nav>

      <h1>Shopping Cart</h1>

      {items.map((item) => (
        <div className="card">
          <img src={item.image} />

          <h3>{item.name}</h3>

          <p>Unit Price: ${item.price}</p>

          <p>Total: ${item.price * item.quantity}</p>

          <button onClick={() => dispatch(decrease(item.id))}>-</button>

          <span>{item.quantity}</span>

          <button onClick={() => dispatch(increase(item.id))}>+</button>

          <button onClick={() => dispatch(remove(item.id))}>Delete</button>
        </div>
      ))}

      <h2>Total Amount: ${total}</h2>

      <button>Checkout - Coming Soon</button>

      <br />
      <br />

      <Link to="/plants">
        <button>Continue Shopping</button>
      </Link>
    </>
  );
}

export default CartItem;
