import { createStore, combineReducers } from "redux";
import jobApplicationsReducer from "../reducers/jobApplications";
import filtersReducer from "../reducers/filters";

export default () => {
  const store = createStore(
    combineReducers({
      jobApplications: jobApplicationsReducer,
      filters: filtersReducer,
    })
  );
  return store;
};
