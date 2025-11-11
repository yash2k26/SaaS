import React from 'react'
import { useUser } from '../context/UserContext/usercontext'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

function Pricing() {
    const {setform} = useUser()
  
    return (
      <div onClick={()=>setform(null)} className='backdrop-blur-sm z-50 flex justify-center items-stretch gap-5 p-10 fixed inset-0 font-serif h-screen'>
        <div onClick={(e)=>e.stopPropagation()} className=' rounded-2xl shadow-inner shadow-violet-300 font-serif  text-center p-5 relative z-0 bg-black  '>
            <h1 className='text-xl text-white  text-wrap text-center font-serif font-extrabold'>Basic Plan</h1>
            <h3 className='text-center text-violet-100 font-serif'>Perfect for beginners exploring AI tools and small creative projects.</h3>
            <div className='absolute inset-0 -z-10  ' >
                    <Canvas>
                    <Stars radius={50} count={2000} factor={4} fade speed={2} />
                    </Canvas>
            </div>
            <div className='bg-neutral-700/20 relative z-50 shadow-inner shadow-violet-200  rounded-xl m-5 py-6 px-3.5 '>
                
                <ul>text-white
                    <li className='backdrop-blur-2xl shadow-inner shadow-white text-white m-2 rounded-md p-2.5 '>Access to all basic AI models</li>
                    <li className='backdrop-blur-2xl shadow-inner shadow-white text-white m-2 rounded-md p-2.5'>Up to 100 credits per month</li>
                    <li className='backdrop-blur-2xl shadow-inner shadow-white text-white m-2 rounded-md p-2.5'>Standard email support</li>
                    <li className='backdrop-blur-2xl shadow-inner shadow-white text-white m-2 rounded-md p-2.5'>Save and revisit up to 10 projects</li>
                    <li className='backdrop-blur-2xl shadow-inner shadow-white text-white m-2 rounded-md p-2.5'>Great for personal or testing use</li>
                </ul>
  
            </div>
                <button className='bg-white/80 shadow-black/20 shadow-lg cursor-pointer px-20  mx-auto font-semibold p-1.5  rounded-2xl'>
                    <h1 className='text-lg  text-center'>$10 per 100 <p className='text-sm'>credits</p></h1>
                </button>
        </div>

        <div onClick={(e)=>e.stopPropagation()} className='items-stretch rounded-2xl shadow-inner shadow-violet-300 font-serif  text-center p-5 relative z-0 bg-black'>
            <h1 className='text-xl text-white  text-wrap text-center font-serif font-extrabold'>Advanced Plan</h1>
            <h3 className='text-center text-violet-100 '>Best for developers, startups, and creators who need more power and flexibility.</h3>
            <div className='absolute inset-0 -z-10' >
                    <Canvas>
                    <Stars radius={50} count={2500} factor={4} fade speed={2} />
                    </Canvas>
                </div>
            <div className='bg-neutral-700/20 relative z-50 shadow-inner shadow-violet-200  rounded-xl m-5 py-6 px-3.5 '>
              
                <ul>
                    <li className='backdrop-blur-2xl shadow-inner shadow-white text-white m-2 rounded-md p-2.5 '>Access to all AI models + beta features</li>
                    <li className='backdrop-blur-2xl shadow-inner shadow-white text-white m-2 rounded-md p-2.5 '>Up to 200 credits per month</li>
                    <li className='backdrop-blur-2xl shadow-inner shadow-white text-white m-2 rounded-md p-2.5 '>Priority email + chat support</li>
                    <li className='backdrop-blur-2xl shadow-inner shadow-white text-white m-2 rounded-md p-2.5 '>Unlimited project saving</li>
                    <li className='backdrop-blur-2xl shadow-inner shadow-white text-white m-2 rounded-md p-2.5 '>Early access to new tools and updates</li>
                </ul>

            </div>
                <button className='bg-white/80 shadow-black/20 shadow-lg cursor-pointer px-20  mx-auto font-outfit p-1.5  rounded-2xl'>
                    <h1 className='text-md text-center text-neutral-700'><h1 className='text-4xl text-black space-y-1 font-outfit '>$40 </h1> per 200 credits</h1>
                </button>
        </div>

        <div onClick={(e)=>e.stopPropagation()} className='rounded-2xl shadow-inner shadow-violet-300 font-serif  text-center    p-5 relative z-0 bg-black '>
            
            <h1 className='text-xl text-wrap text-white  font-extrabold font-serif'>Buisness Plan</h1>
            <h3 className='text-center  text-violet-100 '>Designed for teams and enterprises that require scalability and collaboration.</h3>
            <div className='absolute inset-0 -z-10' >
                    <Canvas>
                    <Stars radius={50} count={2500} factor={4} fade speed={2} />
                    </Canvas>
                </div>
            <div className='bg-neutral-700/20 shadow-inner shadow-violet-200  rounded-xl m-5 py-6 px-3.5 '>
                
                <ul>
                    <li className='backdrop-blur-2xl shadow-inner shadow-white text-white m-2 rounded-md p-2.5 '>Unlimited access to all AI tools and models</li>
                    <li className='backdrop-blur-2xl shadow-inner shadow-white text-white m-2 rounded-md p-2.5 '>500+ credits per month</li>
                    <li className='backdrop-blur-2xl shadow-inner shadow-white text-white m-2 rounded-md p-2.5 '>Dedicated account manager & premium support</li>
                    <li className='backdrop-blur-2xl shadow-inner shadow-white text-white m-2 rounded-md p-2.5 '>Team collaboration features</li>
                    <li className='backdrop-blur-2xl shadow-inner shadow-white text-white m-2 rounded-md p-2.5 '>Custom API access & integrations</li>
                </ul>  
            </div>
                <button className='shadow-black/20 shadow-lg cursor-pointer  mx-auto font-semibold p-1.5 bg-white/80 px-20   rounded-2xl'>
                    <h1 className='text-lg text-center'>$100 per 500 <p className='text-sm'>credits</p></h1>
                </button>
        </div>
      </div>
    )
}

export default Pricing
