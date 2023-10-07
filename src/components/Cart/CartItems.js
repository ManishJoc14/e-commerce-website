import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, updateQuantityOfProduct } from './cartFeatures';
import { v4 as uuidv4 } from 'uuid'

const CartItems = ({ updateTotal }) => {
  const cartItems = useSelector(store => store.cartItems);
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const [productQuantities, setProductQuantities] = useState(
    cartItems.reduce((quantities, product) => {
      quantities[product.imageSrc] = product.quantity;
      return quantities;
    }, {})
  );

  const calculateTotal = (items) => {
    if (!Array.isArray(items)) {
      items = []; // Default to an empty array if items is not an array
    }
    return items.reduce((sum, product) => sum + product.subtotal, 0);
  };

  useEffect(() => {
    // Save cartItems to local storage and update total
    localStorage.setItem('cartItems', JSON.stringify(cartItems)); // Convert to JSON string
    const newTotal = calculateTotal(cartItems);
    setTotal(newTotal);
    localStorage.setItem('total', newTotal);

    // Call the updateTotal function passed as a prop to update the total in the parent
    updateTotal(newTotal);
  }, [cartItems, updateTotal]);

  if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
    return (
      <tr>
        <td colSpan={5}>No Items In Cart</td>
      </tr>
    );
  }

  const handleDelete = (src) => {
    dispatch(deleteProduct({ src }));
    alert("Item removed from cart");
  }

  const handleQuantityChange = (imageSrc, newQuantity) => {
    // Update the quantity for the specific product
    setProductQuantities({
      ...productQuantities,
      [imageSrc]: newQuantity,
    });

    // Calculate the new subtotal for the product
    const updatedCartItems = cartItems.map((product) => {
      if (product.imageSrc === imageSrc) {
        const newSubtotal = product.price * newQuantity;
        return { ...product, quantity: newQuantity, subtotal: newSubtotal };
      }
      return product;
    });

    // Save updated cartItems to local storage
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

    // Dispatch action to update quantity and subtotal in Redux store
    dispatch(updateQuantityOfProduct(updatedCartItems));
  };

  return (
    <>
      {cartItems.map((product, index) => (
        <tr key={uuidv4()}>
          <td>
            <i className="far fa-times-circle delete" onClick={() => handleDelete(product.imageSrc)}></i>
          </td>
          <td>
            <img src={product.imageSrc} alt={product.name} />
          </td>
          <td>{product.name}</td>
          <td>${product.price}</td>
          <td>
            <input
              type="number"
              value={productQuantities[product.imageSrc]}
              min="1"
              onChange={(e) => handleQuantityChange(product.imageSrc, parseInt(e.target.value))}
            />
          </td>
          <td>${product.quantity === 1 ? product.price : product.subtotal}</td>
        </tr>
      ))}
    </>
  );
};

export default CartItems;
