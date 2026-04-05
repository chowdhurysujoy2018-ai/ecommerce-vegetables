import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, updateQty, totalPrice } = useCart();

  return (
    <section className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-md">

        <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b py-4"
              >
                {/* LEFT */}
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p>${item.price}</p>
                  </div>
                </div>

                {/* QTY */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQty(item.id, item.qty - 1)}
                    className="px-2 bg-gray-200"
                  >
                    -
                  </button>

                  <span>{item.qty}</span>

                  <button
                    onClick={() => updateQty(item.id, item.qty + 1)}
                    className="px-2 bg-gray-200"
                  >
                    +
                  </button>
                </div>

                {/* REMOVE */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* TOTAL */}
            <div className="mt-6 text-right">
              <h3 className="text-xl font-bold">
                Total: ${totalPrice.toFixed(2)}
              </h3>

              <button className="mt-4 bg-green-700 text-white px-6 py-2 rounded">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;