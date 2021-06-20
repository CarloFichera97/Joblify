import moment from "moment";
const filtersReducerDefaultState = {
  startDate: undefined,
  endDate: undefined,
  company: "",
  role: "",
  sortBy: "salary",
  searchBy: "company",
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_START_DATE":
      return { ...state, startDate: action.startDate };
    case "SET_END_DATE":
      return { ...state, endDate: action.endDate };
    case "SET_COMPANY_NAME":
      return { ...state, company: action.company };
    case "SET_ROLE_NAME":
      return { ...state, role: action.role };
    case "SORT_BY_SALARY":
      return { ...state, sortBy: "salary" };
    case "SORT_BY_DATE":
      return { ...state, sortBy: "date" };
    case "SEARCH_BY_COMPANY":
      return { ...state, searchBy: "company" };
    case "SEARCH_BY_ROLE":
      return { ...state, searchBy: "role" };
    default:
      return state || [];
  }
};

export default filtersReducer;
