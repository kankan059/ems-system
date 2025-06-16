import React, { useContext, useEffect, useState } from "react";
import Login from "./components/auth/Login";
import EmployeeDashboard from "./components/DashBoard/EmployeeDashboard";
import AdminDashboard from "./components/DashBoard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const authData = useContext(AuthContext);
  const [user, setuser] = useState(null);
  const [setUserData, setsetUserData] = useState(null)

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("loggedInUser");
  //   if (loggedInUser) {
  //     setuser(JSON.parse(loggedInUser));
  //   }
  // }, []);

  const handleLogin = (email, password) => {
    if (authData) {
      const adminData = authData.admin.find(
        (e) => e.email === email && e.password === password
      );
      const employeeData = authData.employees.find(
        (e) => e.email === email && e.password === password
      );

      if (adminData) {
        const userData = { role: "admin" };
        localStorage.setItem("loggedInUser", JSON.stringify(userData));
        setsetUserData(adminData);
        setuser(userData);
      } else if (employeeData) {
        const userData = { role: "employee" };
        localStorage.setItem("loggedInUser", JSON.stringify(userData));
        setsetUserData(employeeData);
        setuser(userData);
      } else {
        alert("Invalid credentials!!");
      }
    }
  };

  return (
    <>
      {!user ? (<Login handleLogin={handleLogin} />) : user.role === "admin" ? (<AdminDashboard data={setUserData} />) : user.role === "employee" ? (<EmployeeDashboard data={setUserData}/>) : null}
    </>
  );
};

export default App;
