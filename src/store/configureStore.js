import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import jobApplicationsReducer from "../reducers/jobApplications";
import filtersReducer from "../reducers/filters";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
  const store = createStore(
    combineReducers({
      jobApplications: jobApplicationsReducer,
      filters: filtersReducer,
    }),
    //To be able to dispatch functions to the store
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
