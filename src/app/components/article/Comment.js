import React, { useState } from "react";
import moment from "moment";

import CommentsList from "./CommentsList";

const Comment = ({ id }) => {
  const [comment, updateComment] = useState(false);

  if (comment === false) {
    updateComment(true);

    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then(response => response.json())
      .then(response => updateComment(response));
  }

  return (
    <React.Fragment>
      {typeof comment === "object" ? (
        <div className="comment">
          <p className="author">
            ▲ {comment.by} {moment(comment.time * 1000).fromNow()}
          </p>
          <p
            className="text"
            dangerouslySetInnerHTML={{ __html: `> ${comment.text}` }}
          />
          {"kids" in comment > 0 ? (
            <CommentsList
              className="nestedCommentsList"
              comments={comment.kids}
            />
          ) : (
            ""
          )}
        </div>
      ) : (
        <div>. . .</div>
      )}
    </React.Fragment>
  );
};

export default Comment;
