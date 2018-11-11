import React, { useState } from "react";

import Page from "../components/Page";
import ArticleBody from "../components/article/Body";

const Article = ({ match }) => {
  const [fetchStatus, updateFetchStatus] = useState(false);
  const [article, updateArticle] = useState(undefined);
  const { articleId } = match.params;

  if (fetchStatus === false) {
    updateFetchStatus(true);

    fetch(`https://hacker-news.firebaseio.com/v0/item/${articleId}.json`)
      .then(response => response.json())
      .then(response => updateArticle(response));
  }

  return (
    <Page>
      <header>Article</header>
      {typeof article === "object" ? (
        <ArticleBody article={article} />
      ) : (
        <p className="loading">Loading...</p>
      )}
    </Page>
  );
};

export default Article;
