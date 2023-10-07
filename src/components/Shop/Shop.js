import React from "react";
import ProductSection from "../Home/products_Section/ProductSection";
import Pagination from './../Blog/Pagination';


const Shop = ({thirdProductsData}) => {
  return (
    <>
      <section id="page-header">
        <h2>#stayhome</h2>
        <p>Save more with coupns & up to 70% off!</p>
      </section>

      <ProductSection products={thirdProductsData} title='Collections' />
      <Pagination/>  
    </>
  );
};

export default Shop;
