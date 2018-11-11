import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Page from "../components/Page";
import StoryList from "../components/story/StoryList";

import { deleteStories, addStories } from "../store/actions/index";

const MAX_POSTS = 50;

const storyFormatter = (story, orderId) => ({
  id: story.id,
  orderId,
  score: story.score,
  url: story.url,
  title: story.title
});

const New = ({ stories, dispatch }) => {
  const [fetchStatus, updateFetchStatus] = useState(false);

  if (fetchStatus === false) {
    dispatch(deleteStories());
    fetch("https://hacker-news.firebaseio.com/v0/newstories.json")
      .then(response => response.json())
      .then(data => data.slice(0, MAX_POSTS))
      .then(stories => {
        Promise.all(
          stories.map((id, orderId) =>
            fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
              .then(response => response.json())
              .then(value => storyFormatter(value, orderId))
          )
        ).then(stories => {
          dispatch(addStories(stories));
        });
      });
    updateFetchStatus(true);
  }

  return (
    <Page>
      <header>Newest Stories</header>
      {stories.length === 0 ? (
        <p className="loading">Loading... </p>
      ) : (
        <StoryList stories={stories} />
      )}
    </Page>
  );
};

const _convertObjectToArray = object => {
  const array = Object.keys(object).map(key => ({ key, ...object[key] }));

  array.sort((a, b) => {
    return a.orderId - b.orderId;
  });

  return array;
};

const mapStateToProps = state => {
  return {
    stories: _convertObjectToArray(state.stories)
  };
};

export default connect(mapStateToProps)(New);
