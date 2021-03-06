const jobApplicationsReducerDefault = [];

const jobApplicationsReducer = (
  state = jobApplicationsReducerDefault,
  action
) => {
  switch (action.type) {
    case "ADD_JOB_APPLICATION":
      return [...state, action.jobApplication];
    case "REMOVE_JOB_APPLICATION":
      return state.filter((arrayElementn) => {
        return arrayElementn.id !== action.id;
      });
    case "EDIT_JOB_APPLICATION":
      return state.map((jobApplication) => {
        if (jobApplication.id === action.id) {
          return { ...jobApplication, ...action.updates };
        } else {
          return jobApplication;
        }
      });
    case "SET_JOB_APPLICATIONS":
      return action.jobApplications;
    default:
      return state || [];
  }
};

export default jobApplicationsReducer;
