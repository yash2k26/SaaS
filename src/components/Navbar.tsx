import React, { useEffect, useState } from 'react'
import Signup1 from './Signup'
import { useUser } from '../context/UserContext/usercontext';


function Navbar() {
  const {setform , user } = useUser()
  return (
    <div>
        <nav className='flex justify-between items-center py-4 h-auto w-full px-20 '>
            <div className='flex space-x-2 my-auto '>
                  <img className="size-10 " src="src\assets\Untitled_design-removebg-preview.png" alt="" />
                  <h1 className="text-white font-semibold text-xl tracking-widest  ">IMAGIFY</h1>
            </div>
            {
              user ? 
              <div 
              className='space-x-3'>
                <button className='bg-[#312e81] shadow-inner shadow-indigo-200 cursor-pointer p-1 font-semibold px-6  text-white text-center rounded-2xl '>Pricing</button>
                <button 
                onClick={()=>setform('login')}
                className='bg-indigo-50 shadow-inner shadow-indigo-950 cursor-pointer text-black px-8 p-1 font-semibold  text-center rounded-2xl '>LogOut</button>
              </div> 
              : 
              <div className='space-x-3'>
                <button className='bg-[#312e81] shadow-inner shadow-indigo-200 cursor-pointer p-1 font-semibold px-6  text-white text-center rounded-2xl '>Pricing</button>
                <button 
                onClick={()=>setform('login')}
                className='bg-indigo-50 shadow-inner shadow-indigo-950 cursor-pointer text-black px-8 p-1 font-semibold  text-center rounded-2xl '>Login</button>
              </div>
            }
        </nav>
      </div>
    
  )
}

export default Navbar
