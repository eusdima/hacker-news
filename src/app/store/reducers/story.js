import {
  ADD_STORY,
  ADD_STORIES,
  UPDATE_STORY,
  DELETE_STORY,
  DELETE_STORIES
} from "../actions/actionTypes";

const initialState = {};

const story = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STORY: {
      const newState = { ...state };

      newState[story.id] = { ...story };

      return newState;
    }
    case ADD_STORIES: {
      const newState = { ...state };

      action.stories.forEach(story => {
        newState[story.id] = { ...story };
      });

      return newState;
    }
    case UPDATE_STORY: {
      const newState = { ...state };

      newState[story.id] = { ...story };

      return newState;
    }
    case DELETE_STORY: {
      const newState = { ...state };
      const { id } = action;

      if (id in newState) {
        delete newState[id];
      }

      return newState;
    }
    case DELETE_STORIES: {
      return {};
    }
    default:
      return state;
  }
};

export default story;
