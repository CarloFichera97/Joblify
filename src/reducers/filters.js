const filtersReducerDefaultState = {
  startDate: undefined,
  endDate: undefined,
  companyName: "",
  role: "",
  sortBy: "salary",
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_START_DATE":
      return { ...state, startDate: action.startDate };
    case "SET_END_DATE":
      return { ...state, endDate: action.endDate };
    case "SET_COMPANY_NAME":
      return { ...state, companyName: action.companyName };
    case "SET_ROLE":
      return { ...state, role: action.role };
    case "SORT_BY_SALARY":
      return { ...state, sortBy: "salary" };
    case "SORT_BY_DATE":
      return { ...state, sortBy: "date" };
    default:
      return state || [];
  }
};

export default filtersReducer;
