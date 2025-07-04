import React, { useEffect, useState } from "react";
import Login from "./components/auth/Login";
import EmployeeDashboard from "./components/DashBoard/EmployeeDashboard";
import AdminDashboard from "./components/DashBoard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";
// import { setLocalStorage } from "./utils/LocalStorage";
// setLocalStorage();
const App = () => {
  // const authData = useContext(AuthContext);
  const admin = JSON.parse(localStorage.getItem("Admin"));
  const employees = JSON.parse(localStorage.getItem("employees"));
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      setUser({ role: parsedUser.role });
      setUserData(parsedUser); // contains full user info
    }
  }, []);

  const handleLogin = (email, password) => {
    // if (authData) {
    //   const adminData = authData.admin.find(
    //     (e) => e.email == email && e.password == password
    //   );
    //   const employeeData = authData.employees.find(
    //     (e) => e.email == email && e.password == password
    //   );
    const adminData = admin.find(
      (e) => e.email == email && e.password == password
    );
    const employeeData = employees.find(
      (e) => e.email == email && e.password == password
    );
    if (adminData) {
      const userData = { role: "admin", ...adminData };
      localStorage.setItem("loggedInUser", JSON.stringify(userData));
      setUser({ role: "admin" });
      setUserData(userData);
    } else if (employeeData) {
      const userData = { role: "employee", ...employeeData };
      localStorage.setItem("loggedInUser", JSON.stringify(userData));
      setUser({ role: "employee" });
      setUserData(employeeData);
    } else {
      alert("Invalid credentials!!");
    }
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user.role === "admin" ? (
        <AdminDashboard data={userData} />
      ) : user.role === "employee" ? (
        <EmployeeDashboard data={userData} />
      ) : null}
    </>
  );
};

export default App;
