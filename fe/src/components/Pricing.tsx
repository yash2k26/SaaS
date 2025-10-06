import React from 'react'
import { useUser } from '../context/UserContext/usercontext'

function Pricing() {
    const {setform} = useUser()
  
    return (
      <div onClick={()=>setform(null)} className='backdrop-blur-sm z-50 gap-5 flex fixed inset-0 justify-center p-10 items-center w-auto h-screen '>
        <div className='rounded-2xl flex flex-col  shadow-2xl h-[400px] w-[250px] bg-white/15 p-5 '>
            <h1 className='text-xl text-wrap text-center font-serif font-extrabold'>Basic Plan</h1>
            <h3 className=''>Best for beginner or personal use. </h3>
            <div className='flex flex-col gap-52'>
                <h1 className='text-lg text-center'>$10/100 credits</h1>
                <button className='bg-gradient-to-b shadow-black/20 shadow-lg cursor-pointer px-6  mx-auto font-semibold p-3 from-[#312e81] to-[#ddd6fe]  rounded-2xl'>
                    Get Started
                </button>
            </div>
        </div>

        <div className='rounded-2xl shadow-2xl font-serif text-center h-[450px] w-[350px] bg-white/15 p-5'>
            <h1 className='text-xl text-wrap font-extrabold font-serif'>Advanced Plan</h1>
            <h3 className=''>Best for Buisness. </h3>
            <div className='flex flex-col gap-72 '>
                <h1 className='text-lg'>$40/200 credits</h1>
                <button className='bg-gradient-to-b shadow-black/55 shadow-lg cursor-pointer px-6 mx-auto  p-3 from-[#312e81] to-[#ddd6fe] rounded-2xl'>
                    Get Started
                </button>
            </div>
        </div>

        <div className='rounded-2xl shadow-2xl  text-center  h-[400px] w-[250px] bg-white/15 p-5 '>
            <h1 className='text-xl text-wrap font-extrabold font-serif'>Buisness Plan</h1>
            <h3 className=''>Best for enterprise use. </h3>
            <div className='flex flex-col gap-60'>
                <h1 className='text-xl'>$100/500 credits</h1>
                <button className='bg-gradient-to-b shadow-black/20 shadow-lg cursor-pointer px-6 mx-auto  from-[#312e81] to-[#ddd6fe] p-3 rounded-2xl'>
                    Get Started
                </button>
            </div>
        </div>
      </div>
    )
}

export default Pricing
