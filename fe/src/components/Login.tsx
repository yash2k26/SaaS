import axios from 'axios';
import { useUser } from '../context/UserContext/usercontext';
import { toast } from 'react-toastify';

function Login1() {
    const {setusername, setcredit,setform,email,password,setuser,setemail,setpassword,backendurl,token,settoken } = useUser()
    const handleLogin = async () =>{
      console.log("ghus gaya ")
        const {data} = await axios.post("http://localhost:3000/user/login",{
          email,
          password
        })

        console.log("ghus gaya 1")
        
        if(data.success){
            console.log("ghus gaya 3")
            settoken(data.token)
            localStorage.setItem('token', data.token)
            setcredit(data.creditBal)
            setusername(data.username)
        }else{
            toast.error(data.mssg)
        }

        toast.success("Welcome back!")
        setemail("")
        setpassword("")
        setform(null)
        setuser(true)
    }

  return (
    <div  onClick={()=>setform(null)} className='backdrop-blur-sm z-50  flex fixed inset-0 justify-center items-center w-auto h-screen '>
      <div onClick={(e)=>e.stopPropagation()} className=' rounded-2xl absolute w-[310px]  bg-indigo-50  text-center mt-16 '>
        <div className='flex'>
            <button className='cursor-pointer mr-11 relative left-72 bottom-6 text-xl font-bold ' onClick={()=>setform(null)}>X</button>
            <h1 className='text-4xl p-3 relative left-10 text-black font-serif mt-7 '>Login</h1>
        </div>   

            <h4 className='text-neutral-600 '>Welcome back! Please Log in to continue</h4>
            <div className='flex flex-col gap-5 m-6 '>
                <input
                className='rounded-xl p-3 border-2 border-black/20 '
                type="text" 
                value={email}
                onChange={(e)=>setemail(e.target.value)}
                name="" 
                placeholder="Email id" />
                <input
                className='rounded-xl p-3 border-2 border-black/20'
                type="password" 
                value={password}
                onChange={(e)=>setpassword(e.target.value)}
                name="" 
                placeholder="Password" />
                <button 
                onClick={handleLogin}
                className='p-3.5 cursor-pointer rounded-2xl shadow-2xl text-white text-center bg-gradient-to-b from-[#1e1b4b]  via-[#312e81] to-[#ddd6fe] '>
                  Login
                </button>
                <div>Don't have an account?  
                    <span className='text-indigo-500 cursor-pointer font-semibold ' onClick={()=>setform('signup')}> Signup</span>
                </div>
            </div>
      </div>
      
    </div>
    
  )
}

export default Login1
