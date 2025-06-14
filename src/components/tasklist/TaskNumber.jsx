import React from "react";
import NewTask from "./NewTask";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskNumber = () => {
  return (
    <div className="w-full flex gap-4 shrink-0 flex-nowrap overflow-x-auto h-[40%] mt-5">
      <NewTask />
      <AcceptTask />
      <CompleteTask />
      <FailedTask />
    </div>
  );
};

export default TaskNumber;
