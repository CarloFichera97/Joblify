export const setStartDate = (startDate = undefined) => ({
  type: "SET_START_DATE",
  startDate,
});

export const setEndDate = (endDate = undefined) => ({
  type: "SET_END_DATE",
  endDate,
});

export const setCompanyName = (company = "") => ({
  type: "SET_COMPANY_NAME",
  company,
});

export const setRoleName = (role = "") => ({
  type: "SET_ROLE_NAME",
  role,
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

export const searchByCompany = () => ({
  type: "SEARCH_BY_COMPANY",
});

export const searchByRole = () => ({
  type: "SEARCH_BY_ROLE",
});
