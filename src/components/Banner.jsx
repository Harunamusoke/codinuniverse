import React from "react";
import NewsLetter from "../common/NewsLettter";

const Banner = () => {
  return (
    <section className="cta-section theme-bg-light py-5">
      <div className="container text-center">
        <h2 className="heading">Coding A Better Universe With Haruna</h2>
        <div className="intro">
          Welcome to my Home. Subscribe and get my latest posts in your inbox.
        </div>
        <NewsLetter />
      </div>
    </section>
  );
};

export default Banner;
