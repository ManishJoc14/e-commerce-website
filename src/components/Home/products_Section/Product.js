import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Cart/cartFeatures";
const Product = ({ products }) => {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState(() =>
    Array(products.length).fill(false)
  );

  if (!products || !Array.isArray(products) || products.length === 0) {
    return <div>No products available</div>;
  }

  const handleAddToCart = (index,product) => {
    const updatedAddedToCart = [...addedToCart];
    updatedAddedToCart[index] = !updatedAddedToCart[index];
    setAddedToCart(updatedAddedToCart);

    dispatch(addProduct({ name: product.name, price: product.price, quantity: 1, imageSrc: product.imageSrc, subtotal : product.price}));
  };

  return (
    <>
      {products.map((product, index) => (
        <div className="pro" key={index}>
          <img src={product.imageSrc} className="imgs" alt="Product" />
          <div className="dis">
            <span>addidas</span>
            <h5>{product.name}</h5>
            <div className="star">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
            </div>
            <h4>${product.price}</h4>
          </div>
          <i
            className={`fal cart ${
              addedToCart[index] ? "fa-solid fa-check" : "fa-shopping-cart"
            }`}
            onClick={() => handleAddToCart(index, product)}
          ></i>
        </div>
      ))}
    </>
  );
};

export default Product;
