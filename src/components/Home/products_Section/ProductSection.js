import React from 'react'
import Product from './Product'

const ProductSection = ({products,title}) => {
  return (
    <>
        <section id="product1" className="section-p1">
            <h2>{title}</h2>
            <p>Summer Collection New Modern Design</p>
            <div className="pro-container">
                <Product products={products} />
            </div>
        </section>
    </>
  )
}

export default ProductSection
