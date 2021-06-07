import moment from "moment";
export const testDataArray = [
  {
    company: "COMPANY ONE",
    role: "JOB ONE",
    salary: "1000",
    createdOn: 0,
    description: "DESCRIPTION ONE",
    notes: "NOTES ONE",
    id: 1,
    status: "STATUS ONE",
  },
  {
    company: "COMPANY TWO",
    role: "JOB TWO",
    salary: "2000",
    createdOn: moment(0).subtract(4, "days").valueOf(),
    description: "DESCRIPTION TWO",
    notes: "NOTES TWO",
    id: 2,
    status: "STATUS TWO",
  },
  {
    company: "COMPANY THREE",
    role: "JOB THREE",
    salary: "500",
    createdOn: moment(0).add(4, "days").valueOf(),
    description: "DESCRIPTION THREE",
    notes: "NOTES THREE",
    id: 3,
    status: "STATUS THREE",
  },
  {
    company: "COMPANY FOUR",
    role: "JOB FOUR",
    salary: "200",
    createdOn: moment(0).subtract(7, "days").valueOf(),
    description: "DESCRIPTION FOUR",
    notes: "NOTES FOUR",
    id: 4,
    status: "STATUS FOUR",
  },
];

export const testData = {
  company: "COMPANY FIVE",
  role: "JOB FIVE",
  salary: "2002222",
  createdOn: moment(0).add(21, "days").valueOf(),
  description: "DESCRIPTION FIVE",
  notes: "NOTES FIVER",
  status: "STATUS FIVE",
};

export const defaultTestData = {
  company: "",
  role: "",
  salary: undefined,
  description: "",
  notes: "",
  createdOn: undefined,
  status: "",
};

export const filtersTestData1 = {
  startDate: undefined,
  endDate: undefined,
  company: "",
  role: "",
  sortBy: "salary",
  searchBy: "company",
};

export const filtersTestData2 = {
  startDate: undefined,
  endDate: undefined,
  company: "",
  role: "",
  sortBy: "date",
  searchBy: "role",
};
