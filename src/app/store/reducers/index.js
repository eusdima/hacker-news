import { combineReducers } from "redux";

import storyReducer from "./story";

export default combineReducers({ stories: storyReducer });
