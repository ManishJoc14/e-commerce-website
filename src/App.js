import { featuresData, blogData, ProductsData, contactData } from "./data/data";

import { useState } from "react";
import {  Routes,Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Cart from "./components/Cart/Cart";
import NewsLetter from "./components/NewsLetter";
import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer";
import React from "react";
import GoTop from './components/GoTop';
import LoadingBar from 'react-top-loading-bar';

function App() {
  const [progress, setProgress] = useState(0);

  return (
    <>
        <Navbar />
        <LoadingBar color='#329490' progress={progress} />
            <Routes>
                <Route path='/' element={<Home features={featuresData} ProductsData={ProductsData}/>} />
                <Route path="/shop" element={<Shop ProductsData={ProductsData} />} />
                <Route path="/about" element={<About setProgress={setProgress}/>} />
                <Route path="/blog" element={<Blog blogData={blogData} />} />
                <Route path="/contact" element={<Contact contactData={contactData} setProgress={setProgress}/>} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        <NewsLetter/>
        <GoTop/>
        <Footer/>
    </>
  );
}

export default App;
