import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Signup1 from './Signup'
import { useUser } from '../context/UserContext/usercontext';

function Login1() {

    const {setform } = useUser()

  return (
    <div className='backdrop-blur-sm z-50  flex fixed inset-0 justify-center items-center w-auto h-screen '>
      <div className=' rounded-2xl absolute w-[310px] shadow-xl  shadow-white bg-indigo-50 h-[400px] text-center mt-16 '>
        <div className='flex'>
            <button className='cursor-pointer mr-11 relative left-72 bottom-6 text-xl font-bold ' onClick={()=>setform(null)}>X</button>
            <h1 className='text-4xl p-3 relative left-10 text-black font-serif mt-7 '>Login</h1>
        </div>   
 
            <h4 className='text-neutral-600 '>Welcome back! Please sign in continue</h4>
            <div className='flex flex-col gap-5 m-6 '>
                <input
                className='rounded-xl p-3 border-2 border-black/20 '
                type="text" 
                name="" 
                placeholder="Email id" />
                <input
                className='rounded-xl p-3 border-2 border-black/20'
                type="password" 
                name="" 
                placeholder="Password" />
                <button className='p-3.5 cursor-pointer rounded-2xl shadow-2xl text-white text-center bg-gradient-to-b from-[#1e1b4b]  via-[#312e81] to-[#ddd6fe] '>Login</button>
                <div>Don't have an account?  
                    <span className='text-indigo-500 cursor-pointer font-semibold ' onClick={()=>setform('signup')}> Signup</span>
                </div>
            </div>
      </div>
      
    </div>
    
  )
}

export default Login1
