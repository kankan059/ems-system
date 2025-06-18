import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const adminCOntextData = useContext(AuthContext);
//   const { admin, employee } = adminCOntextData;
    // console.log(adminCOntextData)
  return (
    <div className="flex flex-col gap-2 rounded-md px-3 py-2 w-full">
          <div className="bg-red-400 flex w-full justify-between items-center px-5 shrink-0 text-black font-medium capitalize h-[70px] rounded-md ">
            <h2 className="w-1/5 text-center">Name</h2>
            <h3 className="w-1/5 text-center">task</h3>
            <h5 className="w-1/5 text-center">Active task</h5>
            <h5 className="w-1/5 text-center">completed task</h5>
            <h5 className="w-1/5 text-center">failed task</h5>
          </div>
      {adminCOntextData.employees.map((e ,idx) => {
        return (
          <div key={idx} className="border-2 border-emerald-600 flex w-full justify-between items-center px-5 shrink-0 font-medium capitalize h-[70px] rounded-md ">
            <h2 className="w-1/5 text-center">{e.firstname}</h2>
            <h3 className="w-1/5 text-center">task</h3>
            <h5 className="w-1/5 text-center">{e.task_count.active}</h5>
            <h5 className="w-1/5 text-center text-green-600">{e.task_count.new_task}</h5>
            <h5 className="w-1/5 text-center text-red-500">{e.task_count.failed}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default AllTask;
