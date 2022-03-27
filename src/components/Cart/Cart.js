import React from "react";
import "./Cart.css";

const Cart = (cart) => {
  return (
    <div className="cart">
      <h4>Order summary</h4>
      <p>Selected Item: {cart.cart.length}</p>
      <p>Total price: </p>
      <p>Shipping: </p>
      <p>Tax: $</p>
      <h5>Grand Total:</h5>
    </div>
  );
};

export default Cart;
