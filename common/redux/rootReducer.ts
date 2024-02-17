import { combineReducers } from "@reduxjs/toolkit";
import fetchReducer from "./reducers/fetchReducer";
import createModalReducer from "./reducers/modalReducer";
import types from "./types";

const rootReducers = combineReducers({
  [types.userInfo]: fetchReducer(types.userInfo),
  [types.userProfileByUserId]: fetchReducer(types.userProfileByUserId),
  [types.userJobs]: fetchReducer(types.userJobs),
  [types.userMayKnow]: fetchReducer(types.userMayKnow),
  [types.listRequestConnection]: fetchReducer(types.listRequestConnection),
  [types.listConnection]: fetchReducer(types.listConnection),
  [types.listConnection]: fetchReducer(types.listConnection),
  [types.totalProfile]: fetchReducer(types.totalProfile),

  [types.modalCreateToken]: createModalReducer(types.modalCreateToken),
  // metadata
  [types.environment]: fetchReducer(types.environment),
  [types.abi]: fetchReducer(types.abi),
});

export default rootReducers;
