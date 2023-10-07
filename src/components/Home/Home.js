import React from 'react'
import HeroSection from "./HeroSection";
import FeatureSection from "./features_Section/FeatureSection";
import ProductSection from "./products_Section/ProductSection";
import BannerFirst from "./BannerFirst";
import BannerSecond from "./BannerSecond";



const Home = ({features,firstProductsData,secondProductsData}) => {

  return (
    <>
          
          <HeroSection />
          <FeatureSection features={features} />
          <ProductSection products={firstProductsData} title='Featured products'/>
          <BannerFirst/>
          <ProductSection products={secondProductsData} title='New Arrivals' />
          <BannerSecond/>
    </>
  )
}

export default Home
