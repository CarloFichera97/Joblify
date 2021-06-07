import moment from "moment";
const getFilteredJobApplications = (
  jobApplications,
  { company, role, sortBy, startDate, endDate, searchBy }
) => {
  return jobApplications
    .filter((jobApplication) => {
      const createdAtMoment = moment(jobApplication.createdOn);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, "day")
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, "day")
        : true;
      const companyTextMatch = jobApplication.company
        .toLowerCase()
        .includes(company.toLowerCase());
      const roleTextMatch = jobApplication.role
        .toLowerCase()
        .includes(role.toLowerCase());
      if (searchBy === "company") {
        return startDateMatch && endDateMatch && companyTextMatch;
      } else if (searchBy === "role") {
        return startDateMatch && endDateMatch && roleTextMatch;
      }
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdOn < b.createdOn ? 1 : -1;
      } else if (sortBy === "salary") {
        return b.salary - a.salary;
      }
    });
};

export default getFilteredJobApplications;

/*
const demo = {
    jobApplications: [
      {
        company: "xxxx",
        role: "Software Developer",
        salary: "xxxxx",
        createdOn: "xxxx",
        description: "xxxx",
        notes: "xxxxx",
        id: "unique ID",
        status: "xxxxx",
      },
    ],
    filters: {
      startDate: "xxxx",
      endDate: "xxxx",
      companyName: "xxxx",
      role: "xxxxxx",
      sortBy: "xxxxxx", //sorted by salary or date
    },
  };
  */
