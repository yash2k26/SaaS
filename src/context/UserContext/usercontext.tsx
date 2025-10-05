import  {  createContext, useContext, useState, type ReactNode } from 'react'

type FormType = "login" | "signup" | null

interface UserContextType {
    user : boolean,
    setuser : (value : boolean) => void,
    form : FormType,
    setform : (value : FormType)=>void,
    email : string,
    setemail : (value  : string)=>void,
    password : string,
    setpassword : (value : string)=>void
}


const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({children}:{children:ReactNode}) => {
    const [user , setuser] = useState<boolean>(false)
    const [email , setemail] = useState<string>("")
    const [password , setpassword] = useState<string>("")
    const [form , setform ]= useState<FormType>(null)

    return (
        <UserContext.Provider
        value={{user , setuser , email , setemail , password , setpassword , form ,setform}}
        >
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () =>{
    const context = useContext(UserContext)
    if(!context) throw new Error("useuser must be within UserProvider")
    return context
}