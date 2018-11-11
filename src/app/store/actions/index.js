import {
  ADD_STORY,
  ADD_STORIES,
  UPDATE_STORY,
  DELETE_STORY,
  DELETE_STORIES
} from "./actionTypes";

export function addStory(story) {
  return { type: ADD_STORY, story };
}

export function addStories(stories) {
  return { type: ADD_STORIES, stories };
}

export function updateStory(story) {
  return { type: UPDATE_STORY, story };
}

export function deleteStory(id) {
  return { type: DELETE_STORY, id };
}

export function deleteStories() {
  return { type: DELETE_STORIES };
}
