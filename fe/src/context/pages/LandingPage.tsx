import Navbar from '../../components/Navbar'
import Badge from '../../components/Badge'
import Maintxt from '../../components/Maintxt'
import Subtxt from '../../components/Subtxt'
import Bttn from '../../components/Bttn'
import Images from '../../components/Images'
import ThreeCards from '../../components/ThreeCards'
import Signup1 from '../../components/Signup'
import Login1 from '../../components/Login'
import { useUser } from '../UserContext/usercontext'
import Imagecap from '../../components/imagecap'
import Pricing from '../../components/Pricing'
import { ToastContainer } from 'react-toastify';
import {  motion, useMotionTemplate, useMotionValue } from "motion/react"
import { useEffect } from 'react'
import { animate } from 'motion'
import { Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import FloatingImages from '../../components/FloatingImages'

const COLORS = [ "#2d1b69", "#5b2d82", "#7e3acb"];

function LandingPage() {
  const { form  } = useUser()
  const color = useMotionValue(COLORS[0])
  
  const backgroundImage = useMotionTemplate`radial-gradient(150% 150% at 50% 0%, #01010f 30%, ${color}) `
  const boxShadow = useMotionTemplate`0px 4px 24px ${color} `
  const border = useMotionTemplate`1px solid${color}`
  useEffect(()=>{
    animate(color,COLORS,{
      ease:"easeInOut",
      duration:10,
      repeat: Infinity,
      repeatType:"mirror"
    })
  },[])
  
  return (
    <div className=''>

      <motion.div 
      style={{
        backgroundImage
      }}
      className='relative h-screen z-10  '>
        <ToastContainer position='top-center'/>
        
        <div className='absolute inset-0 -z-10 pointer-events-none min-h-screen'>
          <Canvas>
            <Stars radius={50} count={1000} factor={4} fade speed={2} />
          </Canvas>
        </div>
        <Navbar/>
        <Badge/>
        <Maintxt/>
        <FloatingImages/>
        <Subtxt/>
        <Bttn boxShadow={boxShadow} border={border} />
        
      </motion.div >
      
        {form === "signup" && <Signup1 /> }
        {form === "login" && <Login1 /> }
        {form === "pricing" && <Pricing/>}
    </div>
  )
}

export default LandingPage
