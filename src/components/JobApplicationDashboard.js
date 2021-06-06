import React from "react";
import JobApplicationList from "./JobApplicationList";
import FilterSelector from "./FilterSelector";

const JobApplicationDashboard = () => (
  <div>
    {" "}
    <FilterSelector />
    <JobApplicationList />{" "}
  </div>
);

export default JobApplicationDashboard;
