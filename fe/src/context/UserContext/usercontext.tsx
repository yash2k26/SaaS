import axios from 'axios'
import  {  createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { toast } from 'react-toastify'

type FormType = "login" | "signup" | "pricing" | null

interface UserContextType {
    user : boolean,
    setuser : (value : boolean ) => void,
    username : string,
    setusername : (value : string ) => void,
    form : FormType,
    setform : (value : FormType)=>void,
    email : string,
    setemail : (value  : string)=>void,
    password : string,
    setpassword : (value : string)=>void,
    setdir:(value:boolean)=>void,
    dir:boolean ,
    token:string | null,
    settoken : (vaue : string | null) => void
    backendurl : string,
    credit : boolean,
    setcredit : (value:boolean)=>void
    logoutuser: () => void
    generateImage: (prompt: any) => Promise<any>
}


const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({children}:{children:ReactNode}) => {
    const [username , setusername] = useState<string>("")
    const [user , setuser] = useState<boolean>(false)
    const [email , setemail] = useState<string>("")
    const [password , setpassword] = useState<string>("")
    const [form , setform ]= useState<FormType>(null)
    const [dir,setdir] = useState<boolean>(false)
    const [token , settoken] = useState<string | null>(localStorage.getItem('token'))
    const [credit , setcredit] = useState(false)
    


    // const fetchuser = async () =>{
    //     if(!user) return
    //     try {
    //       const token = localStorage.getItem('token')
    //       if(!token){
    //         toast.error("You are not signed up!")
    //       }
    //       const {data} = await axios.get("http://localhost:3000/user/credits",{
    //             headers : {Authorization:token}
    //       })

    //       if(data.success){
    //             setcredit(data.credits)
    //             setusername(data.username)
    //         }else{
    //             toast.error(data.mssg)
    //         }
    //     } catch (error) {
    //       //@ts-ignore
    //         toast.error(error.message)
    //     }
    // }
    
    
    //@ts-ignore
    const generateImage = async (prompt) => {
        try {
            //@ts-ignore
            const {data} = await axios.post("http://localhost:3000/api/image-gen",{prompt},{headers:{Authorization:token}})

            console.log


            if(data.success){
                
                return data.resultImage
            }else{
                toast.error(data.message)
                
                if(data.creditBal === 0 ){
                    setform("pricing")
                }
                return null
            }
        } catch (error) {
            if(error instanceof Error){

        
            toast.error(error.message)
            }
        }
        

    }

    const logoutuser = () =>{
        localStorage.removeItem("token")
        settoken('')
        setuser(false)
    }



    const backendurl  = import.meta.env.VITE_BACKEND_URL

    return (
        <UserContext.Provider
        value={{logoutuser,generateImage ,token , settoken,backendurl ,credit , setcredit, username,user,setuser ,dir ,setdir ,setusername , email , setemail , password , setpassword , form ,setform}}
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