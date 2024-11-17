import React from 'react'
import { loading } from '../assets'
import SecondLoad from '../assets/SecondLoad.gif'
import { Typewriter } from 'react-simple-typewriter';

function Generating({className}) {
  return (
    <div data-aos="fade-up" data-aos-duration="3000" className={` z-[1000] opacity-95 flex md:gap-10 gap-2  items-center  h-[2.8rem] px-6 bg-n-8/80
      rounded-[1.7rem] ${className || ""} text-base `}>
        <img className='w-9' src={SecondLoad} alt={SecondLoad} />
        <p>
          <Typewriter
              words={['AI is Genering', "Genering Automated Booking"]}
              loop={0} 
              cursor
              cursorStyle="_"
              typeSpeed={200}
              deleteSpeed={70}
              delaySpeed={5000} 
            />
        </p>
        
      </div>
  )
}

export default Generating