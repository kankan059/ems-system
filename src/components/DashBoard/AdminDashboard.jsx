import React from "react";
import CreateTaskForm from "../taskBox/CreateTaskForm";
import Header from "../../others/Header";
import AllTask from "../taskBox/AllTask";

const AdminDashboard = () => {
  return (
    <>
      <Header />
      <CreateTaskForm />
      <AllTask />
    </>
  );
};

export default AdminDashboard;
