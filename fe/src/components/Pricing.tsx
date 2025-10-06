import React from 'react'
import { useUser } from '../context/UserContext/usercontext'

function Pricing() {
    const {setform} = useUser()
  
    return (
      <div onClick={()=>setform(null)} className='backdrop-blur-sm z-50 gap-5 flex fixed inset-0 justify-center p-10 items-center w-auto h-screen '>
        <div className='rounded-2xl flex flex-col  shadow-2xl h-[400px] w-[250px] bg-white/15 p-5 '>
            <h1 className='text-xl text-wrap text-center font-serif font-extrabold'>Basic Plan</h1>
            <h3 className=''>Best for beginner or personal use. </h3>
            <h1 className='text-lg text-center'>$10/100 credits</h1>

            <button className='bg-gradient-to-b  cursor-pointer mt-40 px-6  mx-auto font-semibold p-3 from-[#312e81] to-[#ddd6fe]  rounded-2xl'>
                Get Started
            </button>
        </div>

        <div className='rounded-2xl shadow-2xl font-serif text-center h-[400px] w-[250px] bg-white/15 p-5'>
            <h1 className='text-xl text-wrap font-extrabold'>Advanced Plan</h1>
            <h3 className=''>Best for Buisness. </h3>
            <h1 className='text-lg'>$40/100 credits</h1>

            <div>
                <button className='bg-gradient-to-b cursor-pointer mt-40 px-6 mx-auto font-semibold p-3 from-[#312e81] to-[#ddd6fe] rounded-2xl'>
                    Get Started
                </button>
            </div>
        </div>

        <div className='rounded-2xl shadow-2xl text-center font-serif h-[400px] w-[250px] bg-white/15 p-5 '>
            <h1 className='text-xl text-wrap font-extrabold'>Buisness Plan</h1>
            <h3 className=''>Best for enterprise use. </h3>
            <h1 className='text-lg'>$100/100 credits</h1>

            <button className='bg-gradient-to-b  cursor-pointer mt-72 px-6 mx-auto font-semibold  from-[#312e81] to-[#ddd6fe] p-3 rounded-2xl'>
                Get Started
            </button>
        </div>
      </div>
    )
}

export default Pricing
