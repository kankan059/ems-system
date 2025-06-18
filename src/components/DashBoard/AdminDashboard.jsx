import React from "react";
import CreateTaskForm from "../taskBox/CreateTaskForm";
import Header from "../../others/Header";
import AllTask from "../taskBox/AllTask";
// import AuthProvider, { AuthContext } from "../../context/AuthProvider";

const AdminDashboard = ({data}) => {
  // const adminDatacontext = useContext(AuthContext);
  return (
    <>
      <Header data={data} />
      <CreateTaskForm />
      <AllTask/>
    </>
  );
};

export default AdminDashboard;
