import { filtersTestData1, filtersTestData2 } from "./../fixtures/testData";
import filtersReducer from "./../../reducers/filters";

test("Should set the start date", () => {
  expect(
    filtersReducer(filtersTestData1, {
      type: "SET_START_DATE",
      startDate: 111,
    })
  ).toEqual({ ...filtersTestData1, startDate: 111 });
});

test("Should set the end date", () => {
  expect(
    filtersReducer(filtersTestData1, {
      type: "SET_END_DATE",
      endDate: 111,
    })
  ).toEqual({ ...filtersTestData1, endDate: 111 });
});

test("Should set the company name", () => {
  expect(
    filtersReducer(filtersTestData1, {
      type: "SET_COMPANY_NAME",
      company: "TEST",
    })
  ).toEqual({ ...filtersTestData1, company: "TEST" });
});

test("Should set the role name", () => {
  expect(
    filtersReducer(filtersTestData1, {
      type: "SET_ROLE_NAME",
      role: "TEST",
    })
  ).toEqual({ ...filtersTestData1, role: "TEST" });
});

test("Should set the role ", () => {
  expect(
    filtersReducer(filtersTestData1, {
      type: "SET_ROLE",
      role: "TEST",
    })
  ).toEqual({ ...filtersTestData1, role: "TEST" });
});

test("Should set SORT BY to Salary", () => {
  expect(
    filtersReducer(filtersTestData2, {
      type: "SORT_BY_SALARY",
    })
  ).toEqual({ ...filtersTestData2, sortBy: "salary" });
});

test("Should set SORT BY to Date", () => {
  expect(
    filtersReducer(filtersTestData1, {
      type: "SORT_BY_DATE",
    })
  ).toEqual({ ...filtersTestData1, sortBy: "date" });
});

test("Should set SEARCH BY to company", () => {
  expect(
    filtersReducer(filtersTestData2, {
      type: "SEARCH_BY_COMPANY",
    })
  ).toEqual({ ...filtersTestData2, searchBy: "company" });
});

test("Should set SORT BY to Date", () => {
  expect(
    filtersReducer(filtersTestData1, {
      type: "SEARCH_BY_ROLE",
    })
  ).toEqual({ ...filtersTestData1, searchBy: "role" });
});
