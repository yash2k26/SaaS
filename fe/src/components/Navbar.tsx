import { useState } from 'react';
import { useUser } from '../context/UserContext/usercontext';


function Navbar() {
  const { setform, user, setdir, dir ,  } = useUser()
  const [count, setcount] = useState(5)

  function credit() {
    if (count > 0) {
      setcount(count => count - 1)
    } else {
      setcount(0)
    }
  }

  return (
    <div>
      <nav className='flex justify-between  items-center py-4 h-auto w-full px-24 '>
        <div className='flex space-x-2 my-auto  '>
          <img className="size-10 " src="src\assets\Untitled_design-removebg-preview.png" alt="" />
          <h1 className="text-white font-semibold text-xl tracking-widest  ">IMAGIFY</h1>
        </div>
        {
          user ?
            <div className='flex space-x-3 justify-center'>
              <div>
                <button
                  onClick={credit}
                  className='bg-[#524fa8af] shadow-inner shadow-indigo-200 cursor-pointer p-1 font-semibold px-6  text-white text-center rounded-2xl '>Credits Left : {count} </button>
              </div>
              <div>
                <img
                  onClick={() => setdir(!dir)}
                  className='h-9 w-9 absolute shadow-2xl shadow-white cursor-pointer rounded-full object-cover ' src="src\assets\676-6764065_default-profile-picture-transparent-hd-png-download.png" alt="not working" />
              </div>
              {
                dir && <div className='bg-indigo-100 rounded-xl flex flex-col relative p-1  '>
                  <div>dkbakdabdkj</div>
                  <div>ladnkjadjkadjkba</div>
                  <div>lndkadndn</div>
                  <div>adkdknakn</div>
                </div>
              }
            </div>
            :
            <div className='space-x-3 '>
              <button 
              onClick={()=>setform('pricing')}
              className='bg-[#312e81] shadow-inner shadow-indigo-200 cursor-pointer p-1 font-semibold px-6  text-white text-center rounded-2xl '>Pricing</button>
              <button
                onClick={() => setform('login')}
                className='bg-indigo-50 shadow-inner shadow-indigo-950 cursor-pointer text-black px-8 p-1 font-semibold  text-center rounded-2xl '>Login</button>
            </div>
        }
      </nav>
    </div>

  )
}

export default Navbar
