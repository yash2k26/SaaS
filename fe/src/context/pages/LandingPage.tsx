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
import Pricing from '../../components/pricing'

function LandingPage() {
  const { form  } = useUser()
  return (
    <div>
      <div className=' bg-gradient-to-b from-[#1e1b4b] from-35% via-[#312e81] to-[#ddd6fe] min-h-screen '>
        <Navbar/>
        <Badge/>
        <Maintxt/>
        <Subtxt/>
        <Bttn/>
        <Images/>
        <div className="flex text-center font-mono mt-3.5 justify-center items-center ">
          <h4 className="text-white">Generating images from imagify....</h4>
        </div>
        <div className='flex justify-center items-center mt-28  '>
          <h2 className='text-6xl text-center font-semibold text-white '>
            How it works
            <h4 className='text-indigo-100 text-sm mt-4  '>
              Transform Words Into Stunning Images
            </h4>
          </h2>
        </div>
        <ThreeCards/>
      </div>
        {form === "signup" && <Signup1 /> }
        {form === "login" && <Login1 /> }
        {form === "pricing" && <Pricing/>}
    </div>
  )
}

export default LandingPage
