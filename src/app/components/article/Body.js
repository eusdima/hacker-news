import React from "react";

import CommentsList from "./CommentsList";

import "./Body.css";

const Body = ({ article }) => (
  <div className="article">
    <div className="body">
      <p className="title">{article.title}</p>
      <p className="score">{article.score} points</p>
      <p className="by">by {article.by}</p>
      <p className="by">comments {article.descendants}</p>
      <a className="url" href={article.url}>
        source
      </a>
    </div>

    {"kids" in article ? (
      <React.Fragment>
        <header>Comments</header>
        <CommentsList comments={article.kids} />
      </React.Fragment>
    ) : (
      <header>No comments yet</header>
    )}
  </div>
);

export default Body;
