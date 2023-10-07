import React from "react";
import ProductSection from "../Home/products_Section/ProductSection";
import Pagination from './../Blog/Pagination';
import Banner from "./Banner";

const Shop = ({ProductsData}) => {
  return (
    <>
      <section id="page-header">
        <h2>#stayhome</h2>
        <p>Save more with coupns & up to 70% off!</p>
      </section>

      <ProductSection products={ProductsData.slice(0,12)} title='Collections' />
      <Banner/>
      <Pagination/>  
    </>
  );
};

export default Shop;
