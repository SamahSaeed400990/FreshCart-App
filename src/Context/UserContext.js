import { createContext ,useState } from "react";

export let UserContext = createContext()
export default function UserContextProvider(){
    const [userToken , setUserToken] = useState(null)
    return <UserContext.Provider value={{userToken,setUserToken}} >

    </UserContext.Provider>
}