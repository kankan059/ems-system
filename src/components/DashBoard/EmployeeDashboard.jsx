import React from "react";
import Header from "../../others/Header";
import TaskNumber from "../tasklist/TaskNumber";
import TaskLIsts from "../tasklist/TaskLIsts";

const EmployeeDashboard = ({data}) => {
  return (
    <>
    <div className="p-2">
      <Header  data={data}/>
      <TaskNumber data={data}/>
      <TaskLIsts data={data}/>
    </div>
    </>
  );
};

export default EmployeeDashboard;
