import React, { useState, useEffect } from "react";
import apis from "../api";
const LoggedInContext = React.createContext();

const LoggedInProvider = (props) => {
  const [user, setUser] = useState({
    loggedIn: false,
    userName: undefined,
    userImg: undefined,
  });

  useEffect(() => {
    async function fetchUser() {
      const newUser = (await apis.getUser()).data;
      console.log(newUser);
      if (newUser) {
        setUser(newUser);
      }
    }
    fetchUser();
  }, [user.loggedIn]);
  return (
    <LoggedInContext.Provider value={{ user, setUser }}>
      {props.children}
    </LoggedInContext.Provider>
  );
};

export { LoggedInProvider, LoggedInContext };
