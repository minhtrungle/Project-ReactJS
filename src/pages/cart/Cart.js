import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import MainLayout from "../main";

const Cart = () => {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();

  console.log(items)
  const user = localStorage.getItem("userInfo");


  if (isEmpty) return <p>Your cart is empty</p>;
  const LayoutCart = () => {
    return (
      <div className="container">
        <div className="col-12">
          <h1>Cart ({totalUniqueItems})</h1>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.quantity} x {item.name} &mdash;
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <button
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button onClick={() => removeItem(item.id)}>&times;</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="row">
          <div className="col-12">
            {user ? (
              <Link className="btn btn-primary" to="/checkout">Checkout</Link>
            ) : (
              <Link className="btn btn-primary" to="/login">Login</Link>
            )}
          </div>
        </div>
      </div>
    );
  };
  return <MainLayout content={<LayoutCart />} />;
};

export default Cart;
