import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../context/UserContext/usercontext'
import axios from 'axios'
import { toast } from 'react-toastify'

function Signup1() {
  const {setform,setusername,setuser,setemail,setpassword, username , email ,token,settoken, password } = useUser()

  const handleSignup = async () =>{
    console.log("starting")
    try {
      console.log("entered here")
      
      const {data} = await axios.post("http://localhost:3000/user/signup",{
        username,
        email,
        password
      })
      console.log("entered here 2")

      if(data.success){
            toast.success("Welcome ! You can now generate your images ✨")
            
            settoken(data.token)
            localStorage.setItem('token', data.token)
        }else{
            toast.error(data.mssg)
        }
      
      setemail("")
      setpassword("")
      setusername("")
      setform(null)
      setuser(true)
    } catch (error) {
      console.log("couldn't make it there")
      console.log("internal error : ",error)
      toast.error("signup failed")
    }
    
  }


  
  return (
    <div onClick={()=>setform(null)} className='backdrop-blur-sm z-50  flex fixed inset-0 justify-center items-center w-auto h-screen '>
      <div onClick={(e)=>e.stopPropagation()} className=' rounded-2xl w-[310px] bg-indigo-50  text-center mt-16 '>
        <div className='flex'>
            <button className='cursor-pointer  relative left-72 bottom-6 text-xl font-bold ' onClick={()=>setform(null)}>X</button>
            <h1 className='text-4xl p-3 relative left-20 text-black font-serif mt-7 '>Sign up</h1>
        </div>   
            <h4 className='text-neutral-600 '>Welcome ! Please Sign up to continue</h4>
            <div className='flex flex-col gap-5 m-6 '>
                <input
                className='rounded-xl p-3 border-2 border-black/20 '
                type="text" 
                value={username}
                onChange={(e)=>setusername(e.target.value)}
                name="" 
                placeholder="Username" />

                <input
                className='rounded-xl p-3 border-2 border-black/20'
                type="email" 
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
                onClick={handleSignup}
                className='p-3.5 rounded-2xl shadow-2xl text-white cursor-pointer text-center bg-gradient-to-b from-[#1e1b4b]  via-[#312e81] to-[#ddd6fe] '>
                  Sign up
                </button>
                <div>Already have an account?  
                     <span className='text-indigo-500 cursor-pointer font-semibold ' onClick={()=>setform('login')}>Login</span>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Signup1
