import React from 'react'
import HeroSection from "./HeroSection";
import FeatureSection from "./features_Section/FeatureSection";
import ProductSection from "./products_Section/ProductSection";
import Banner from "./Banner";



const Home = ({features,ProductsData}) => {

  return (
    <>
          <HeroSection />
          <FeatureSection features={features} />
          <ProductSection products={ProductsData.slice(0,12)} title='Featured products'/>
          <Banner/>
    </>
  )
}

export default Home
