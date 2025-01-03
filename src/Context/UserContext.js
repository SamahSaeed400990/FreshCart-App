import { createContext ,useState } from "react";

export let userContext = createContext()
export default function UserContextProvider(){
    const [userToken , setUserToken] = useState(null)
    return <userContext.Provider value={{userToken,setUserToken}} >

    </userContext.Provider>
}