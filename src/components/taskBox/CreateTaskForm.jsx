import React, {useState } from "react";

const CreateTaskForm = () => {
  const [task_title, settask_title] = useState("");
  const [task_date, settask_date] = useState("");
  const [firstname, setEmployeeName] = useState("");
  const [task_category, settask_category] = useState("");
  const [task_description, settask_description] = useState("");
  let found = false;
  let getData = (e) => {
    e.preventDefault();
    const userNewData = {
      task_title,
      task_date,
      task_category,
      task_description,
      active: false,
      new_task: true,
      failed: false,
    };
    const data = JSON.parse(localStorage.getItem('employees'))
    console.log(data)
    data.forEach(e=>{
      if(e.firstname == firstname){
        e.tasks.push(userNewData)
        found = true;
      }
    })
    if(!found) alert (`NO! name with ${firstname}`);

    localStorage.setItem('employees' , JSON.stringify(data))

    settask_title("");
    settask_date("");
    settask_category("");
    settask_description("");
    setEmployeeName("");
  };

  return (
    <div className="h-full w-full p-3">
      <form className="flex justify-between w-full p-4">
        <section id="frist-part" className="flex flex-col">
          <label className="mt-5" htmlFor="task-task_title">
            Task Title
          </label>
          <input
            value={task_title}
            onChange={(e) => {
              settask_title(e.target.value);
            }}
            type="text"
            name="Task-task_title"
            placeholder="Make a ui desgn"
            className="taskInput"
          />
          <label className="mt-5" htmlFor="task_date">
            Date
          </label>
          <input
            value={task_date}
            onChange={(e) => {
              settask_date(e.target.value);
            }}
            type="date"
            placeholder="dd/mm/yy"
            className="taskInput"
          />
          <label className="mt-5" htmlFor="asign">
            Asign to
          </label>
          <input
            value={firstname}
            onChange={(e) => {
              setEmployeeName(e.target.value);
            }}
            type="text"
            placeholder="employee name"
            className="taskInput"
          />
          <label className="mt-5" htmlFor="task_categoryegory">
            Category
          </label>
          <input
            value={task_category}
            onChange={(e) => {
              settask_category(e.target.value);
            }}
            type="text"
            placeholder="design,dev etc"
            className="taskInput"
          />
        </section>
        <section id="second-part" className="flex flex-col justify-start">
          <label className="mt-5" htmlFor="task_descriptionription">
            Description 
          </label>
          <textarea
            value={task_description}
            onChange={(e) => {
              settask_description(e.target.value);
            }}
            name="task_description"
            id="task_description"
            className="w-sm border-2 border-gray-400 h-[70%] rounded-lg"
          ></textarea>
          <button
            onClick={getData}
            type="submit"
            className="bg-green-400 rounded-md mt-5 text-sm capitalize p-1"
          >
            Create Task
          </button>
        </section>
      </form>
    </div>
  );
};

export default CreateTaskForm;
