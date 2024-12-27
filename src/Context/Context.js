import { createContext } from "react"
import { useContext } from "react";

const UserContext = createContext({
    chance:5,
    Score:0,
    changeScore:()=>{},
    changetry:()=>{}
})

export default UserContext;
export const UserProvider = UserContext.Provider
export const compoContext=()=>{
    return useContext(UserContext)
} 
