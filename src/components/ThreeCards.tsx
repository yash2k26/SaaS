import React from 'react'

function ThreeCards() {
  return (
    <div>
      <div className='flex flex-col pt-7'>
            <div className='bg-indigo-50 m-4 mx-auto p-5 rounded-2xl '>
              <div className='flex items-center p-3'>
                <img src="src\assets\step_icon_1.svg" alt="" />
                <h1 className='p-2 font-semibold'>Describe Your Vision <br />
                <span className='font-normal text-neutral-500'> "Type a phrase, sentence , or paragraph that describe the image you want to create."</span>
                </h1>
              </div>
            </div>

            <div className='bg-indigo-50 m-4 mx-auto p-5 rounded-2xl '>
              <div className='flex items-center p-3'>
                <img src="src\assets\step_icon_2.svg" alt="" />
                <h1 className='p-2 font-semibold'>Describe Your Vision <br />
                <span className='font-normal text-neutral-500'> "Type a phrase, sentence , or paragraph that describe the image you want to create." </span>
                </h1>
              </div>
            </div>

            <div className='bg-indigo-50 m-4 mx-auto p-5 rounded-2xl '>
              <div className='flex items-center p-3'>
                <img src="src\assets\step_icon_3.svg" alt="" />
                <h1 className='p-2 font-semibold '>Describe Your Vision <br />
                <span className='font-normal text-neutral-500'> "Type a phrase, sentence , or paragraph that describe the image you want to create." </span>
                </h1>
              </div>
            </div>

        </div>
    </div>
  )
}

export default ThreeCards
