// Cart.js

import React, { useState } from "react";
import ContactBanner from "./../Contact/ContactBanner";
import CartItems from "./CartItems";

const Cart = () => {
  const [total, setTotal] = useState(0);

  // Function to update the total in the parent component
  const updateTotal = (newTotal) => {
    setTotal(newTotal);
  };
 
  return (
    <>
      <ContactBanner />
      <section id="cart" className="section-p1">
        <table width="100%">
          <thead>
            <tr>
              <td>Remove</td>
              <td>Image</td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>SubTotal</td>
            </tr>
          </thead>
          <tbody id="cartItems">
            {/* Pass the updateTotal function as a prop */}
            <CartItems updateTotal={updateTotal} />
          </tbody>
        </table>
      </section>

      <section id="cart-add" className="section-p1">
        <div id="coupon">
          <h3>Apply Coupon</h3>
          <div>
            <input type="text" placeholder="Enter Your Coupon" />
            <button className="normal">Apply</button>
          </div>
        </div>

        <div id="subTotal">
          <h3>Cart Totals</h3>
          <table id="table2">
            <tbody>
              <tr>
                <td>Cart SubTotal</td>
                <td className="cardTotals">${total}</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>free</td>
              </tr>
              <tr>
                <td>
                  <strong>Total</strong>
                </td>
                <td style={{ fontWeight: "bold" }} className="cardTotals">
                  ${total}
                </td>
              </tr>
            </tbody>
          </table>
          <button className="normal">Proceed to checkout</button>
        </div>
      </section>
    </>
  );
};

export default Cart;
