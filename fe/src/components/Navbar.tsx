import { useEffect, useState } from 'react';
import { useUser } from '../context/UserContext/usercontext';
import axios from 'axios';
import { toast } from 'react-toastify'


function Navbar() {
  const { setform, user, setdir, dir ,logoutuser,credit,username } = useUser()

  return (
    <div className=''>
      <nav className='flex justify-between items-center py-4 h-auto w-full px-24 '>
        <div className='flex space-x-2 my-auto  '>
          <img className="size-10 " src="src\assets\Untitled_design-removebg-preview.png" alt="" />
          <h1 className="text-white font-semibold text-xl tracking-widest  ">IMAGIFY</h1>
        </div>
        {
          user ?
            <div className='flex space-x-3 justify-center'>
              <div>
                <button
                  className='bg-transparent shadow-inner shadow-indigo-200 cursor-pointer p-1 font-semibold px-6  text-white text-center rounded-2xl '>Credits Left : {credit} </button>
              </div>
              <div className='text-white font-serif my-auto '>Hi, {username}</div>
              <div>
                <img
                  onClick={() => setdir(!dir)}
                  className='size-8 absolute shadow-2xl shadow-white cursor-pointer rounded-full object-cover ' src="src\assets\676-6764065_default-profile-picture-transparent-hd-png-download.png" alt="not working" />
              </div>
              {
                dir && <div className='bg-indigo-100 rounded-xl  flex flex-col  relative p-1  '>
                  <button onClick={logoutuser} className='bg-red-600 '>Logout</button>
                </div>
              }
            </div>
            :
            <div className='space-x-3 '>
              <button 
              onClick={()=>setform('pricing')}
              className='bg-transparent shadow-inner shadow-violet-200 cursor-pointer p-1 font-semibold px-6  text-white text-center rounded-xl '>Pricing</button>
              <button
                onClick={() => setform('login')}
                className='bg-indigo-50 shadow-inner shadow-violet-200 cursor-pointer bg-clip-text text-transparent px-8 p-1 font-semibold  text-center rounded-xl '>Login</button>
            </div>
        }
      </nav>
    </div>

  )
}

export default Navbar
