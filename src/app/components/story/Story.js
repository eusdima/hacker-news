import React from "react";
import { NavLink } from "react-router-dom";

const Story = ({ id, title, score, url }) => (
  <div className="story">
    <p className="score">{score}</p>
    <NavLink className="title" to={`/article/${id}`}>
      {title}
    </NavLink>
    <a href={url}>External Source</a>
    <NavLink to={`/article/${id}`}>Article</NavLink>
  </div>
);

export default Story;
