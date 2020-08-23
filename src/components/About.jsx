import React, { Fragment } from "react";
import NewsLetter from "../common/NewsLettter";

const About = () => {
  return (
    <Fragment>
      <article class="about-section py-5 h-100">
        <div class="container">
          <div className="row">
            <div className="col-4">
              <h2 class="title mb-3">About Me</h2>
              <figure className="w-100">
                <img
                  src="https://media.istockphoto.com/photos/a-stack-of-colorful-books-in-a-library-picture-id901643418"
                  alt=""
                  className="img-fluid"
                />{" "}
              </figure>
            </div>
            <div className="col-8">
              <article className="lead">
                <strong>Haruna</strong> is an well motivated developer with lust
                do more than enough. I have been exposed to many and tricky
                technologies as well as languages in the current software
                universe to have what he has right now.
                <br />
                <br />I strongly put emphasis in building reilable and robust
                pieces of software in a way to make the clients as well as
                fellow developers proud of his work and effort. Throughout my
                experience , <strong>I</strong> try tooth and nail to extract
                the best of principles in both the development and commercial
                aspects.
                <br />
                <br />
                The high most accomplishment could be thought of{" "}
                <strike> producing projects</strike> to other people ,{" "}
                <strong>BUT</strong> to <strong>me</strong> its all about making
                them work forever.
                <br />
                <br />
                In those few of words of approval , I{" "}
                <u> suggest and request </u> you entrust me with your next ,
                current and future project expecting morethan what you expected.
                <strong>It will be a pleasure to work with you.</strong> Thanks.
                entrust
              </article>
            </div>
          </div>
        </div>
      </article>
      <section class="cta-section theme-bg-light py-5">
        <div class="container text-center">
          <h2 class="heading">Newsletter</h2>
          <div class="intro">
            Welcome to my blog. Subscribe and get my latest blog post in your
            inbox.
          </div>
          <NewsLetter />
        </div>
      </section>
    </Fragment>
  );
};

export default About;
