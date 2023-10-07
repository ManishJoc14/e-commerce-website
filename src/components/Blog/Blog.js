import React from "react";
import Pagination from "./Pagination";
import { v4 as uuidv4 } from 'uuid'

const Blog = ({ blogData }) => {

  if (!blogData || !Array.isArray(blogData) || blogData.length === 0) {
    return <div>No Blogs available</div>;
  }
  return (
    <>
      <section id="page-header" className="blog-header">
        <h2>#Read More</h2>
        <p>Read all case studies about our products</p>
      </section>

      {blogData && blogData.map((blog, index) => (
        <section id="blog" key={uuidv4()} style={{marginTop:'-70px'}}>
          <div className="blog-box">
            <div className="blog-img">
              <img src={blog.imageSrc} alt="blogImage" />
            </div>
            <div className="blog-details">
              <h4>{blog.title}</h4>
              <p>
                Kisckstart man braid godard coloring book. Raclette waistcoat
                selfies yr wolf chartreques hexagon irony,
              </p>
              <a href=" ">CONTINUE READING</a>
            </div>
            <h1>13/01</h1>
          </div>
        </section>
      ))}
      
      <Pagination/>
    </>
  );
};

export default Blog;
