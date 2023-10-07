import React, { useState } from 'react'
import Product from './Product'
import ProductModal from '../../ProductModal'

const ProductSection = ({products,title}) => {
  const [modalProduct, setModalProduct] = useState({
    name:'',
    quantity : 1,
    price: 0,
    imageSrc : ''
  });
  const updateProductModal = (ModalProdut)=>{
    setModalProduct(ModalProdut);
  }
  return (
    <>
        <ProductModal modalProduct={modalProduct}/>
        <section id="product1" className="section-p1" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <h2>{title}</h2>
            <p>Summer Collection New Modern Design</p>
            <div className="pro-container">
                <Product products={products} updateProductModal={updateProductModal} />
            </div>
        </section>
    </>
  )
}

export default ProductSection
