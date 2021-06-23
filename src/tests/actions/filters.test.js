import moment from "moment";
import {
  setStartDate,
  setEndDate,
  setCompanyName,
  setRole,
  setRoleName,
  searchByCompany,
  searchByRole,
  sortBySalary,
  sortByDate,
} from "./../../actions/filters";
test("Should set start date", () => {
  const startDate = moment();
  expect(setStartDate(startDate)).toEqual({
    type: "SET_START_DATE",
    startDate,
  });
});

test("Should set start date to undefined", () => {
  expect(setStartDate()).toEqual({
    type: "SET_START_DATE",
    startDate: undefined,
  });
});

test("Should set end date", () => {
  const endDate = moment();
  expect(setEndDate(endDate)).toEqual({
    type: "SET_END_DATE",
    endDate,
  });
});

test("Should set end date to undefined", () => {
  expect(setEndDate()).toEqual({
    type: "SET_END_DATE",
    endDate: undefined,
  });
});

test("Should set company name ", () => {
  const company = "TEST";
  expect(setCompanyName(company)).toEqual({
    type: "SET_COMPANY_NAME",
    company,
  });
});

test("Should set company name to empty string", () => {
  expect(setCompanyName()).toEqual({
    type: "SET_COMPANY_NAME",
    company: "",
  });
});

test("Should set role ", () => {
  const role = "TEST";
  expect(setRoleName(role)).toEqual({
    type: "SET_ROLE_NAME",
    role,
  });
});

test("Should set role to empty string", () => {
  expect(setRoleName()).toEqual({
    type: "SET_ROLE_NAME",
    role: "",
  });
});

test("Should SORT BY to Salary ", () => {
  expect(sortBySalary()).toEqual({
    type: "SORT_BY_SALARY",
  });
});
test("Should SORT BY to Date ", () => {
  expect(sortByDate()).toEqual({
    type: "SORT_BY_DATE",
  });
});

test("Should SEARCH BY to company ", () => {
  expect(searchByCompany()).toEqual({
    type: "SEARCH_BY_COMPANY",
  });
});

test("Should SEARCH BY role ", () => {
  expect(searchByRole()).toEqual({
    type: "SEARCH_BY_ROLE",
  });
});
