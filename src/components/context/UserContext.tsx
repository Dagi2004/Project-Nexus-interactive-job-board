
import { useContext,createContext, useState } from "react"
//Create Context
const UserContext=createContext<{
    username:string | null ;
    setUsername:(username:string | null)=>void
}>({
    username:null,
    setUsername:()=>{}
})
//custom hook to use the context
export const useUser=()=>useContext(UserContext)
export const UserProvider=({children}:{children:React.ReactNode})=>{
    const [username,setUsername]=useState<string | null>(null)
    return(
        <UserContext.Provider value={{username,setUsername}}>
            {children}
        </UserContext.Provider>
    )
}