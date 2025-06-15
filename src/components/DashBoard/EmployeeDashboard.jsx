import React from "react";
import Header from "../../others/Header";
import TaskNumber from "../tasklist/TaskNumber";
import TaskLIsts from "../tasklist/TaskLIsts";

const EmployeeDashboard = () => {
  return (
    <>
    <div className="p-2">
      <Header />
      <TaskNumber/>
      <TaskLIsts/>
    </div>
    </>
  );
};

export default EmployeeDashboard;
