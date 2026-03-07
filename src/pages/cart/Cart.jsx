import "./cart.css";
import { CartContext } from "../../context/Contexts";
import { useContext } from "react";


const Cart = () => {
  const { cartItems, addToCart, removeFromCart, minusOneItem } = useContext(CartContext);

  return (
    <div className="cart">
      <h1 className="cart-title">Your Shopping Cart</h1>
      <div className="cart-wrapper">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={`/books/${item.image}`} alt={item.title} className="cart-item-img" />
              <div className="cart-item-info">
                <div>
                  <div className="cart-item-book-title">
                    <b>Title: </b>
                    {item.title}
                  </div>
                  <div className="cart-item-author">
                    <b>Author: </b>
                    {item.author}
                  </div>
                </div>
                <div>
                  <div className="cart-item-quantity">
                    <button onClick={() => addToCart(item)} className="bi bi-plus-lg"></button>
                    <b>{item.quantity}</b>
                    <button onClick={() => minusOneItem(item.id)} disabled={item.quantity <= 1}>
                      <i className="bi bi-dash-lg"></i>{" "}
                    </button>
                    <button className="btn-del" onClick={() => removeFromCart(item.id)}>
                      <i className="bi bi-trash-fill"></i>
                    </button>
                  </div>
                  <div className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-order-summary">
          <h5 className="order-summary-title">ORDER SUMMARY</h5>
          <div className="order-summary-item">
            <span>Subtotal</span>
            <span>
              ${cartItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)}
            </span>
          </div>
          <div className="order-summary-item">
            <span>Shipping Cost</span>
            <span>0</span>
          </div>
          <div className="order-summary-item">
            <span>Discount</span>
            <span>0</span>
          </div>
          <div className="order-summary-item">
            <strong>Total</strong>
            <span>
              ${cartItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
