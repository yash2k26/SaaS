import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { useUser } from '../UserContext/usercontext'
import Navbar from '../../components/Navbar'
import {  motion, useMotionTemplate, useMotionValue } from "motion/react"
import axios from 'axios'
import { header } from 'motion/react-client'
import { toast } from 'react-toastify'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

 

const COLORS = [ "#2d1b69", "#5b2d82", "#7e3acb"];



const ImageGen = () => {

  const { generateImage } = useUser()
  const [prompt , setprompt ] = useState<string>("")
  const [messages , setmessages] = useState<string[]>([])
  const [loading , setloading] = useState<boolean | null>(null)
  const [ImageUrl , setImageUrl] = useState<string | null>("")

  const handleSend = async () =>{
      if(!prompt) return

      setmessages((prev)=>[...prev,prompt])
      setprompt("")
      setloading(true)
      
      try {
        const url = await generateImage(prompt)

        console.log("Image url : ",url)
        
        if(url){
          setImageUrl(url)
        }else{
          toast.error("Failed to generate an image")
        }

      } catch (error) {
            console.error("something went wrong")
      }finally{
        setloading(false)
      }
      
  }

  return (
    <div className='bg-black relative h-screen w-full overflow-hidden  '> 
 

      <div className='inset-0 z-0 absolute pointer-events-none  '>
        <Canvas>
          <Stars radius={50} count={1200} factor={4} fade speed={2} />
        </Canvas>
      </div>

      <nav className=' p-4 z-0 items-center bg-black backdrop-blur-2xl flex border-gray-900 '>
        <img className="size-10 " src="src\assets\Untitled_design-removebg-preview.png" alt="" />
        <h1 className='text-white font-semibold text-xl tracking-widest'>IMAGIFY</h1>
      </nav>

      {
        <div className='absolute bottom-[90px] [&::-webkit-scrollbar]:hidden scroll-smooth top-[75px] right-[250px] inset-x-0 overflow-y-auto flex flex-col items-center  gap-3 z-0 '>
          {messages.map((msg,i)=>(
            <motion.div
            key={i}
            initial={{opacity:0 , y:80}}
            animate = {{opacity:1 , y:0}}
            transition={{duration:0.5}}
            className='bg-white/20 text-white break-words whitespace-pre-wrap self-end px-4 py-6 max-w-[75%] rounded-2xl text-left '
            >
              {msg}
            </motion.div>
          ))}
        </div>
      }

      { loading &&
        <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          className='w-96 h-96 mt-4'
        >
            <img src="src\assets\Loading animation blue.gif" alt="Loading" className='w-16 h-16 animate-pulse' />
        </motion.div>
      }

      {
        ImageUrl &&

        <motion.img
          src={ImageUrl}
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:0.5}}
          className='rounded-2xl max-w-[55%] '
        />
        
      }
      
      <div className='absolute bottom-10 inset-x-0 flex justify-center px-4'>
        <div className='flex items-center gap-2 w-full max-w-3xl bg-[#403C41]  rounded-xl px-4 py-3 focus:outline-none '>
          <input 
          value={prompt}
          onChange={(e)=>setprompt(e.target.value)}
          type="text"
          placeholder='Enter a prompt to generate an image' 
          className='w-full break-words whitespace-pre-wrap max-h-40 overflow-y-auto text-white bg-transparent focus:outline-none ' />
          <img
          //@ts-ignore
          onClick={handleSend}
          className='w-6 h-6 cursor-pointer transition  focus  ' 
            src="src\assets\send (1).png" alt="" />
        </div>
      </div>

      
    </div>
  )
}

export default ImageGen
