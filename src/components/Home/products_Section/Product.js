import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Cart/cartFeatures";
import { v4 as uuidv4 } from "uuid";
import { toast } from 'react-toastify';

const Product = ({ products, updateProductModal }) => {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState(() =>
    Array(products.length).fill(false)
  );

  if (!products || !Array.isArray(products) || products.length === 0) {
    return <div>No products available</div>;
  }

  const handleAddToCart = (index, product) => {
    const updatedAddedToCart = [...addedToCart];
    updatedAddedToCart[index] = !updatedAddedToCart[index];
    setAddedToCart(updatedAddedToCart);

    dispatch(
      addProduct({
        name: product.name,
        price: product.price,
        quantity: 1,
        imageSrc: product.imageSrc,
        subtotal: product.price,
      })
    );
    toast.success("Item added to cart")
  };
  const openModal = (product) => {
    updateProductModal({
      ...product,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      imageSrc: product.imageSrc,
    });
  };
  return (
    <>
      {products.map((product, index) => (
        <div className="pro" key={uuidv4()}>
          <div
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            onClick={() => openModal(product)}
          >
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
