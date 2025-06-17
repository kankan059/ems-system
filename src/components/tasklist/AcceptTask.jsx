import React from "react";

const AcceptTask = ({data}) => {
  console.log(data)
  return (
    <div className="font-bold flex items-center justify-between my-2 px-4 py-10 rounded-lg text-2xl text-white bg-emerald-500 w-[40%]">
      <h3>Accept Task</h3>
      <h1 className="">{data.task_count.active}</h1>
    </div>
  );
};

export default AcceptTask;
