import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import jobApplicationsReducer from "../reducers/jobApplications";
import filtersReducer from "../reducers/filters";
import authReducer from "../reducers/auth";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
  const store = createStore(
    combineReducers({
      jobApplications: jobApplicationsReducer,
      filters: filtersReducer,
      auth: authReducer,
    }),
    //To be able to dispatch functions to the store
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};
