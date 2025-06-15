import React, { useState } from "react";

const CreateTaskForm = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [employeeName, setEmployeeName] = useState("");
  const [cat, setCat] = useState("");
  const [desc, setDesc] = useState("");

  let getData = (e) => {
    e.preventDefault();
    console.log(name, date, employeeName, cat, desc);
    setName("");
    setDate("");
    setCat("");
    setDesc("");
    setEmployeeName("");
  };

  return (
    <div className="h-full w-full p-3">
      <form className="flex justify-between w-full p-4">
        <section id="frist-part" className="flex flex-col">
          <label className="mt-5" htmlFor="task-title">
            Task Title
          </label>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            name="Task-title"
            placeholder="Make a ui desgn"
            className="taskInput"
          />
          <label className="mt-5" htmlFor="date">
            Date
          </label>
          <input
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
            type="date"
            placeholder="dd/mm/yy"
            className="taskInput"
          />
          <label className="mt-5" htmlFor="asign">
            Asign to
          </label>
          <input
            value={employeeName}
            onChange={(e) => {
              setEmployeeName(e.target.value);
            }}
            type="text"
            placeholder="employee name"
            className="taskInput"
          />
          <label className="mt-5" htmlFor="category">
            Category
          </label>
          <input
            value={cat}
            onChange={(e) => {
              setCat(e.target.value);
            }}
            type="text"
            placeholder="design,dev etc"
            className="taskInput"
          />
        </section>
        <section id="second-part" className="flex flex-col justify-start">
          <label className="mt-5" htmlFor="description">
            Description
          </label>
          <textarea
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            name="desc"
            id="desc"
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
