import React from "react";

const Post = ({ article }) => {
  return (
    <div className="item mb-5">
      <div className="media">
        <img
          className="mr-3 img-fluid post-thumb d-none d-md-flex"
          src={article.urlToImage}
          alt="about"
        />
        <div className="media-body">
          <h3 className="title mb-1">
            <a href={article.url} target="_blank">
              {article.title}
            </a>
          </h3>
          <div className="meta mb-1">
            <span className="date">{article.publishedAt}</span>
            <span className="time">{article.author}</span>
            <span className="comment">
              <a href="#!">8 comments</a>
            </span>
          </div>
          <div className="intro">{article.description}</div>
          <a className="more-link" target="_blank" href={article.url}>
            {article.source.name}&rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Post;
