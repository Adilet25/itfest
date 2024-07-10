import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext);

const API = "https://backitfest.pythonanywhere.com";

const AuthContextProvider = ({ children }) => {
  const [role, setRole] = useState(null);
  const [errorr, setErrorr] = useState();

  const navigate = useNavigate();

  async function register(formData, fork) {
    try {
      const response = await fetch(`${API}/${fork}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log(formData);
      } else {
        const errorData = await response.json();
        console.log(errorData);
        console.log(JSON.stringify(formData));
      }
    } catch (err) {
      errorr = err;
      console.error("Error:", err);
    }
  }

  return (
    <authContext.Provider
      value={{
        role,
        errorr,
        setRole,
        register,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
