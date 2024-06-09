import Footer from './common/Footer'
import Navbar from './common/Navbar'
import profileImage from '../assets/main-profile.webp'
import background from '../assets/background-bud2.jpeg'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className='w-full h-screen'>
        <Navbar/>
        <div className='w-full h-[80vh]' style={{backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
         <div className='w-full h-full flex justify-between' >
          <div className='w-full md:w-2/3 flex items-center justify-center md:justify-start bg-gradient-to-r from-white ... '>
            <div className='w-3/4 md:2/3 lg:w-1/2 pl-5 md:pl-20 flex flex-col gap-6'>
              <h3 className='w-full md:w-[80%] lg:w-[60%] font-sans font-bold text-center md:text-start text-4xl'>Experience a fresh way to <span className='text-purple-900'>manage money</span></h3>
              <p className='w-full md:w-[80%] lg:w-[70%] font-sans text-center md:text-start'>Reach your goal with personalized insights, custom budgets, spend tracking and subscription monitoring - all for free</p>
              <Link to='/signup' className='w-32 h-12 bg-purple-900 text-white text-xl font-sans font-semibold flex items-center justify-center self-center md:self-start'>Sign up</Link> 
            </div> 
          </div>
          <div className='hidden lg:w-1/3 h-full bg-inherit lg:flex items-center justify-start'>
            <div className='w-[50%] bg-transparent'>
              <img src={profileImage} alt='Profile' className='w-full bg-transparent' style={{mixBlendMode: 'normal'}}/>
            </div>
          </div>
         </div>
        </div> 
        <Footer/>
    </div>
  )
}

export default Home
