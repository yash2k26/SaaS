import React from 'react'

function Imagecap() {
  return (
    <div className='flex justify-center items-center mx-28 mt-16  '>
      <div className='m-11'>
        <img className='rounded-xl h-[300px] w-[850px]' src="src\assets\sample_img_2.png" alt="" />
      </div>
      <div className='flex flex-col gap-4'>
        <h1 className='text-3xl flex-wrap wrap-break-word text-indigo-950 font-serif'>Introducing the AI-Powered Text to Image Generator</h1>
        <h2 className='break-words'>Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.</h2>
        <h2>Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From product visuals to character designs and portraits, even concepts that don’t yet exist can be visualized effortlessly. Powered by advanced AI technology, the creative possibilities are limitless!</h2>
      </div>
    </div>
  )
}

export default Imagecap
