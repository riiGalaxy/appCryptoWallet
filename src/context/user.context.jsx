import React, { createContext, useState, useEffect } from "react";
import userServices from "../services/user.services";

const UserContext = createContext();

function UserProviderWrapper(props) {
  //states
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const storeToken = (token) => {
    localStorage.setItem("userToken", token);
  };
  const getToken = () => {
    return localStorage.getItem("userToken");
  };
  const removeToken = () => {
    localStorage.removeItem("userToken");
  };

  const authenticateUser = () => {
    const storedToken = getToken();
    console.log("storedToken context", storedToken);

    if (!storedToken) {
      logOutUser();
    } else {
      userServices
        .verify(storedToken)
        .then(({ data }) => {
          const user = data;
          setIsLoggedIn(true);
          setIsLoading(false);
          setUser(user);
        })
        .catch(() => logOutUser);
    }
  };

  const logOutUser = () => {
    removeToken();
    setIsLoggedIn(false);
    setIsLoading(false);
    setUser(null);
  };

  useEffect(() => authenticateUser(), []);

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        storeToken,
        authenticateUser,
        logOutUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProviderWrapper };
