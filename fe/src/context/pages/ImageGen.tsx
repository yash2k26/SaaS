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

  const { generateImage,credit,setcredit } = useUser()
  const [prompt , setprompt ] = useState<string>("")
  const [messages , setmessages] = useState<data[]>([])
  const [loading , setloading] = useState<boolean | null>(null)
  const [ImageUrl , setImageUrl] = useState<string | null>("")

  type data = {
    type: string,
    content: string

  }

  const handleSend = async () =>{
      if(!prompt) return
 
      setmessages((prev)=>[...prev,{type : "prompt" , content : prompt   }])
      setprompt("")
      setloading(true)
      
      try {
        const result = await generateImage(prompt)
        if(!result) return

        const {resultImage , creditBal } = result

        console.log(resultImage)
        console.log(creditBal)

        if(resultImage){
          setcredit(creditBal)
          setmessages((prev)=>[...prev,{type : "image" , content : resultImage   }])
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

      <nav className=' p-4 z-0 items-center justify-between bg-black backdrop-blur-2xl flex border-gray-900 '>
        <div className='flex'>
        <img className="size-10 " src="src\assets\Untitled_design-removebg-preview.png" alt="" />
        <h1 className='text-white font-semibold text-xl tracking-widest'>IMAGIFY</h1>
        </div>
        <div>
          <button
              className='bg-transparent shadow-inner shadow-indigo-200 cursor-pointer p-1 font-semibold px-6  text-white text-center rounded-2xl '>
                Credits Left : {credit} 
          </button>
        </div>
      </nav>

      {
        <div className='absolute bottom-[90px] [&::-webkit-scrollbar]:hidden scroll-smooth top-[75px] right-[290px] inset-x-0 overflow-y-auto flex flex-col items-center  gap-3 z-0 '>
          {messages.map((msg)=>(
            msg.type == "prompt" ? 
              <motion.div
              initial={{opacity:0 , y:80}}
              animate = {{opacity:1 , y:0}}
              transition={{duration:0.5}}
              className='bg-white/20 text-white break-words whitespace-pre-wrap self-end px-4 py-6 max-w-[75%] rounded-2xl text-left '
              >
                {msg.content}
              </motion.div> :
              (
                <motion.img
                  src={msg.content}
                  initial={{opacity:0}}
                  animate={{opacity:1}}
                  transition={{duration:0.5}}
                  className='rounded-2xl w-44 mr-56'
                />
              )
          ))}
        </div>
      }

      { loading &&
      <div className='bottom-[90px] [&::-webkit-scrollbar]:hidden scroll-smooth top-[75px] right-[250px] inset-x-0 overflow-y-auto flex flex-col items-center  gap-3 z-0 '>
          <motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            className='w-40 mt-4'
          >
              <img src="src\assets\Loading animation blue.gif" alt="Loading" className='w-16 h-16 animate-pulse' />
          </motion.div>
      </div>
        
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
