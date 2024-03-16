import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const UserContext = createContext({});

export function UserContextProvider({children}){
    const [username, setUsername] = useState(null);
    const [id, setId] = useState(null);
    const [role, setRole] = useState(null);

    useEffect(() => {
        axios.get("/profile")
          .then(response => {
            console.log(response.data);
            setUsername(response.data.username);
            setId(response.data.userId); // Corrected property name to userId
            setRole(response.data.role);
          })
          .catch(error => {
            console.error("Error fetching user profile:", error);
          });
      }, []);

    return(
        <UserContext.Provider value={{username, setUsername, id, setId, role, setRole}}>
            {children}
        </UserContext.Provider>
    )
}