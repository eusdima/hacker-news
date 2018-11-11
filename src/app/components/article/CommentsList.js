import React, { useState, useEffect } from "react";

import Comment from "./Comment";

const renderComments = commentsIds =>
  commentsIds.map(id => <Comment key={id} id={id} />);

const CommentsList = ({ comments }) => {
  return <div className="comments">{renderComments(comments)}</div>;
};

export default CommentsList;
