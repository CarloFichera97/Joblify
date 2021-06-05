export const setStartDate = (startDate = undefined) => ({
  type: "SET_START_DATE",
  startDate,
});

export const setEndDate = (endDate = undefined) => ({
  type: "SET_END_DATE",
  endDate,
});

export const setCompanyName = (companyName = "") => ({
  type: "SET_COMPANY_NAME",
  companyName,
});

export const setRole = (role = "") => ({
  type: "SET_ROLE",
  role,
});

export const sortBySalary = () => ({
  type: "SORT_BY_SALARY",
});

export const sortByDate = () => ({
  type: "SORT_BY_DATE",
});
