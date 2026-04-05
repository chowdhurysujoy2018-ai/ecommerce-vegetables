import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  // ✅ ADD TO CART
  const addToCart = (product) => {
    // 🔥 ZERO-BYPASS AUTH CHECK
    const loggedInUserStr = localStorage.getItem('user');
    let isAuthed = false;
    
    if (loggedInUserStr) {
      try {
        const u = JSON.parse(loggedInUserStr);
        if (u && Object.keys(u).length > 0) isAuthed = true;
      } catch (e) {}
    }

    if (!isAuthed) {
      alert("Please login first to add items to your cart.");
      navigate('/login');
      return;
    }

    setCartItems((prev) => {
      const exist = prev.find((item) => item.id === product.id);

      if (exist) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  // ✅ REMOVE
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ UPDATE QTY
  const updateQty = (id, qty) => {
    if (qty < 1) return;

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty } : item
      )
    );
  };

  // ✅ TOTAL
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQty,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;