import React, { useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation(); // Destructure pathname directly from useLocation
  const navbarRef = useRef();

  const handleOpen =  ()=> {
      navbarRef.current.classList.add('active');
  }
  
  const handleClose =  ()=> {
      navbarRef.current.classList.remove('active');
  }

  return (
    <section id="header">
      <Link to="/">
        <img src={require("../img/logo.png")} alt="Cara" />
      </Link>
      <div>
        <ul id="navbar" ref={navbarRef}>
          <li>
            <Link to="/" className={pathname === '/' ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className={pathname === '/shop' ? "active" : ""}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/blog" className={pathname === '/blog' ? "active" : ""}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/about" className={pathname === '/about' ? "active" : ""}>
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={pathname === '/contact' ? "active" : ""}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              
              to="/aboutme"
              className={pathname === '/aboutme' ? "active" : ""}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              id="lg-bag"
              to="/cart"
              className={pathname === '/cart' ? "active" : ""}
            >
              <i className="far fa-shopping-bag" />
            </Link>
          </li>
          <Link href=" " id="close" onClick={handleClose} style={{color:'#000'}}><i className="far fa-times"></i></Link>
        </ul>
      </div>
      <div id="mobile">
        <Link to="/cart">
          {" "}
          <i className="far fa-shopping-bag" />
        </Link>
        <i id="bar" className="fas fa-outdent" onClick={handleOpen} />
      </div>
    </section>
  );
};

export default Navbar;
