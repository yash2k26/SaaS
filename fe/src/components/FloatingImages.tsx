import React from 'react'
import { delay, motion } from "framer-motion"

const FloatingImages = () => {
  const images = [
    {
      src: "/src/assets/cat_with_hat.png",
      from: { x: "5vw", y: "10vh", rotate: -10 },
      to: { x: "58vw", y: "8vh", rotate: 10 },
      duration: 550 ,
      delay: 4
    },
    {
      src: "/src/assets/fashion_ecommerce_shot.png",
      from: { x: "80vw", y: "60vh", rotate: 15 },
      to: { x: "30vw", y: "75vh", rotate: -5 },
      duration: 500 ,
      delay: 5
    },
    {
      src: "/src/assets/city.png",
      from: { x: "25vw", y: "70vh", rotate: 10 },
      to: { x: "60vw", y: "65vh", rotate: 25 },
      duration:570 ,
      delay: 2
    },
    {
      src: "/src/assets/photorealistic_example.png",
      from: { x: "80vw", y: "10vh", rotate: -10 },
      to: { x: "20vw", y: "25vh", rotate: 10 },
      duration: 590 ,
      delay: 3
    },
  ]

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
      {images.map((img, i) => (
        <motion.img
          key={i}
          src={img.src}
          alt=""
          className="absolute w-40 h-40 object-cover rounded-2xl opacity-90"
          initial={img.from}
          animate={img.to}
          transition={{
            duration: img.duration,
            ease: "linear",
            
          }}
        />
      ))}
    </div>
  )
}

export default FloatingImages
