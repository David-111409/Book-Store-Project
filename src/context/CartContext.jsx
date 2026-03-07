import { useState } from "react";
import { CartContext } from "./Contexts";

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item, fromInput) => {
    let isExist = false;

    const newCart = cartItems.map((el) => {
      if (el.id === item.id) {
        isExist = true;
        return { ...el, quantity: fromInput ? el.quantity + item.quantity : el.quantity + 1 };
      }
      return el;
    });

    if (!isExist) {
      newCart.push({ ...item, quantity: item.quantity ? item.quantity : 1 });
    }

    setCartItems(newCart);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  const minusOneItem = (id) =>
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.quantity > 1 && id === item.id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      }),
    );
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, minusOneItem }}>
      {children}
    </CartContext.Provider>
  );
};
