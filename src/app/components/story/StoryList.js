import React from "react";

import Story from "./Story";

import "./StoryList.css";

const renderStories = stories =>
  stories.map((storyProps, key) => <Story key={key} {...storyProps} />);

const StoryList = ({ stories }) => (
  <div className="storyList">{renderStories(stories)}</div>
);

export default StoryList;
