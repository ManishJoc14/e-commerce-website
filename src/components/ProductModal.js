import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "./Cart/cartFeatures";
import {toast} from "react-toastify";

const ProductModal = ({ modalProduct,updateProductModal }) => {
  const dispatch = useDispatch();
  const closeModalRef = useRef();
  const { name, price, imageSrc } = modalProduct;
  const [noOfQuantity, setNoOfQuantity] = useState(1);
    const handleAddToCart = (product) => {
      dispatch(addProduct({ name: product.name, price: product.price, quantity: noOfQuantity, imageSrc: product.imageSrc, subtotal : parseInt(product.price)* parseInt(noOfQuantity)}));
      toast.success("Added To Cart");
      updateProductModal({name:'',price:'',quantity:1, imageSrc:''});
      closeModalRef.current.click();
    };
  const handleQuantityChange = (e) => {
    setNoOfQuantity(e.target.value)
  };
  return (
    <>
      <div
        className="modal fade modal-dialog-scrollable  modal-xl"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <section id="prodetails" className="section-p1">
                <div className="single-pro-image">
                  <img
                    src={imageSrc}
                    width="100%"
                    id="MainImg"
                    alt="productImage"
                  />
                </div>
                <div className="single-pro-details">
                  <h4 id="main_product_title"> {name}</h4>
                  <h2 id="main_product_price">${price}</h2>
                  <select id="size">
                    <option value="">Select Size</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                    <option value="Small">Small</option>
                    <option value="Large">Large</option>
                  </select>
                  <input
                    type="number"
                    value={noOfQuantity}
                    min="1"
                    id="quantity"
                    onChange={(e)=>handleQuantityChange(e)}
                  />
                  <button className="normal" id="addToCart" onClick={()=>handleAddToCart(modalProduct)}>
                    Add To Cart
                  </button>
                  <h4>Product Details</h4>
                  <span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                </div>
              </section>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal" ref={closeModalRef}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;
