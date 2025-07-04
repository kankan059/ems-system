import React, { createContext, useEffect, useState } from "react";
import { getLoclStorage } from "../utils/LocalStorage";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setuserData] = useState(null);

  useEffect(() => {
    const { employees, admin } = getLoclStorage();
    setuserData({ employees, admin });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
