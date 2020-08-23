import React from "react";
import Loader from "./../common/Loader";
import Post from "./Post";

const HomeBody = ({ articles, changePage, page }) => {
  console.log(articles);
  console.log(articles.length);

  return (
    <section className="blog-list px-3 py-5 p-md-5">
      <div className="container">
        {articles.length === 0 ? (
          <Loader />
        ) : (
          articles.map((article) => (
            <Post article={article} key={article.title} />
          ))
        )}
        {renderNav(changePage, page)}
      </div>
    </section>
  );
};

const renderNav = (changePage, page) => {
  return (
    <nav className="blog-nav nav nav-justified my-5">
      <a
        className={`nav-link-prev btn nav-item nav-link ${
          (page = 1) ? "d-none" : ""
        } rounded-left`}
      >
        Previous<i className="arrow-prev fas fa-long-arrow-alt-left"></i>
      </a>
      <a className="nav-link-next nav-item nav-link rounded">
        Next
        <i
          className="arrow-next fas fa-long-arrow-alt-right"
          onClick={() => changePage()}
        ></i>
      </a>
    </nav>
  );
};
export default HomeBody;
