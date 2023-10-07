import React from "react";
import FeatureSection from './../Home/features_Section/FeatureSection';
import { featuresData } from "../../data/data";

const About = ({setProgress}) => {
  setProgress(100);

  return (
    <>
      <section id="page-header" className="about-header">
        <h2>#KnowUs</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </section>


        <section id="about-head" className="section-p1">
          <img src={require("../../img1/about/a6.jpg")} alt="aboutUsImage" />
          <div>
            <h2>Who WE Are?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              laboriosam pariatur voluptatibus blanditiis doloribus obcaecati
              neque autem consequuntur nam, officiis ullam odio. Sed saepe rerum
              eveniet nesciunt voluptatem minus quos? Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Earum dolores hic commodi
              laboriosam. Sit earum ex dicta deleniti, iure dolor provident
              atque repellendus laboriosam unde! Fugiat in reiciendis officia
              sunt!
            </p>
            <abbr title="">
              Create stunning images as much as or as little control as you like
              thanks to win a choice of Basic and creative modes.
            </abbr>
            <br />
            <br />
            <marquee bgcolor="#ccc" loop={-1} scroll-amount={5} width="100%">
              Create stunning images as much as or as little control as you like
              thanks to win a choice of Basic and creative modes.
            </marquee>
          </div>
        </section>
        <section id="about-app" className="section-p1">
          <h1>
            Download Our <a href=" ">App</a>
          </h1>
          <div className="video">
            <video src={require("../../img1/about/1.mp4")} autoPlay muted loop />
          </div>
        </section>

        <FeatureSection features={featuresData}/>
    </>
  );
};

export default About;
