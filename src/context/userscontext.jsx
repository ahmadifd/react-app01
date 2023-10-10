import { createContext } from "react";

const usersContext = createContext({
    currentUser: {},
    handleUser: () => {},
  });
 
export default usersContext;