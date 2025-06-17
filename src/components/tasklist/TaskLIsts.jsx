import React from "react";

const TaskLIsts = ({ data }) => {
  // data.tasks.map(e=>{console.log(e)})
  // data.tasks.map(e=>{

  // })
  const colors = ["bg-orange-300", "bg-blue-300", "bg-green-300", "bg-pink-300", "bg-yellow-300"];

  return (
    <>
      <div className="w-full h-[50%] flex gap-5  flex-nowrap overflow-x-auto py-5 mt-4 ">
        {data.tasks.map((e ,idx) => {
          const bgcolor = colors[idx % colors.length]
          return (
            <div key={idx} className={`h-[250px] w-[250px] flex-shrink-0 ${bgcolor} text-black rounded-xl`}>
              <div className="flex justify-between items-center">
                <h3 className="bg-red-500 text-sm px-3 py-1 rounded-lg mt-2 ml-3">
                  {e.task_category}
                </h3>
                <h3 className="mt-2 mr-3">{e.task_date}</h3>
              </div>
              <h2 className="font-medium text-md mt-5 pl-2 uppercase">
                {e.task_title}
              </h2>
              <p className="font-thin mt-0 p-3">
                {e.task_description}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TaskLIsts;
