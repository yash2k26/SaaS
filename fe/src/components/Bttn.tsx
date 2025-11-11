import React, { useState } from 'react'
import {  motion } from "motion/react"
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Navigate, useNavigate} from 'react-router-dom';
//@ts-ignore
function Bttn({boxShadow , border}) {
  const [hover ,sethover] = useState(false)

  const navigate = useNavigate()

  const redirect = () =>{
      navigate("/Imagegen")
  }
  return (
    <div >
      
          <motion.button
          onClick={redirect}
          onMouseEnter={()=>sethover(true)} 
          onMouseLeave={()=>sethover(false)}
          style={{
            boxShadow,
            border
          }}
          className="bg-transparent  backdrop-blur-2xl cursor-pointer px-6 mt-14  text-white block mx-auto font-semibold p-3 rounded-2xl ">
            <span className='flex '>Generate Images ✨ 
              {hover ? <ArrowUpRight className='ml-3'/> : 
              <ArrowRight className='ml-3   '/> }
            </span>
          </motion.button >
    </div>
  )
}

export default Bttn
