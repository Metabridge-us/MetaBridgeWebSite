import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import { smallSphere, stars } from '../assets'
import Section from "./Section";
import { useState, useEffect } from "react";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import { motion } from 'framer-motion';
import VideoTutorial from '../assets/VideoTutorial.mp4'
import MetabridgeLogoWeb from '../assets/MetabridgeLogoWeb.png'
import NTHO from '../assets/NTHO.gif'
import loadGif from '../assets/load.gif'
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import { Typewriter } from 'react-simple-typewriter';
const Hero = () => {
  const parallaxRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < 60000) {
          return prevCount + 1000; 
        } else {
          clearInterval(interval); 
          return prevCount;
        }
      });
    }, 50); 

    return () => clearInterval(interval);
  }, []);

  const [counttwo, setCountTwo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountTwo((prevCount) => {
        if (prevCount < 1400000) {
          return prevCount + 20000; 
        } else {
          clearInterval(interval); 
          return prevCount;
        }
      });
    }, 50); 

    return () => clearInterval(interval);
  }, []);

  const [countthree, setCountTree] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountTree((prevCount) => {
        if (prevCount < 622) {
          return prevCount + 20; 
        } else {
          clearInterval(interval); 
          return prevCount;
        }
      });
    }, 50); 

    return () => clearInterval(interval);
  }, []);

  const [countfour, setCountFour] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountFour((prevCount) => {
        if (prevCount < 14) {
          return prevCount + 1; 
        } else {
          clearInterval(interval); 
          return prevCount;
        }
      });
    }, 400); 

    return () => clearInterval(interval);
  }, []);
  return (
    <Section id="Home"
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      
    >
      <img  className="absolute -top-52 opacity-35  w-full h-full md:w-full bg-cover" src={NTHO} alt="" />
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <div className="w-full mb-4">
            <motion.img data-aos="fade-up" data-aos-duration="3000" className="m-auto w-[200px] md:w-[800px]" src={MetabridgeLogoWeb} alt={MetabridgeLogoWeb} />
          </div>
          <div className='absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
              <img src={stars} className='w-full' width={950} height={400}  alt="Stars" />
           </div>
          <h1  className="h4 md:h2 mb-6">
            <Typewriter
            words={['Power Up Your Business: Simplify Marketing and Sales with Metabridge’s All-in-One AI-Powered Platform!']}
            loop={1} 
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000} 
          />
          </h1>
          <div className=" grid grid-cols-2 max-w-full m-auto justify-center gap-12">
            <div data-aos="flip-left"data-aos-easing="ease-out-cubic" data-aos-duration="2000">
              <h1 className="text-purple-800 text-[25px] md:text-5xl">{count} +</h1>
              <h1 className="text-[12px] text-yellow-500 md:text-[25px]">
                <Typewriter
                words={['Customers!']}
                loop={1} 
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000} 
              />
              </h1>
            </div>
            
            <div data-aos="flip-left"data-aos-easing="ease-out-cubic" data-aos-duration="2000" >
              <h1 className="text-purple-800 text-[25px] md:text-5xl">{counttwo} +</h1>
              <h1 className="text-[12px] text-yellow-500 md:text-[25px]">
                <Typewriter
                words={['BUSINESSES!']}
                loop={1} 
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000} 
              />
              </h1>
            </div>

            <div data-aos="flip-left"data-aos-easing="ease-out-cubic" data-aos-duration="2000">
              <h1 className="text-purple-800 text-[25px] md:text-5xl">{countthree} M +</h1>
              <h1 className="text-[12px] text-yellow-500 md:text-[25px]">
                <Typewriter
                words={['LEADS!']}
                loop={1} 
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000} 
              />
              </h1>
            </div>

            <div data-aos="flip-left"data-aos-easing="ease-out-cubic" data-aos-duration="2000">
              <h1 className="text-purple-800 text-[25px] md:text-5xl">{countfour} B +</h1>
              <h1 className="text-[12px] text-yellow-500 md:text-[25px]">
                <Typewriter
                words={['CONVERSATIONS!']}
                loop={1} 
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000} 
              />
              </h1>
            </div>
          </div>
          
          
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div data-aos="fade-up" data-aos-anchor-placement="center-bottom"  className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] relative rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
               
                <motion.video className="w-full bg-gray-50 bg-cover  scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]" src={VideoTutorial}  muted autoPlay loop></motion.video>
                <motion.img initial={{opacity:1}} animate={{opacity:0}} transition={{duration:5, delay:12}} exit={{opacity:0}}
                  src={robot}
                  className="w-full absolute top-0  scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />
                 <ScrollParallax isAbsolutelyPositioned>
                <motion.button initial={{opacity:0}} animate={{opacity:1}} transition={{duration:5, delayChildren:5}}  className="absolute bottom-9 flex gap-3 text-center bg-slate-500 p-2 rounded-xl opacity-80 left-4 right-4   md:left-1/2 md:right-auto md:bottom-8 md:w-[19rem] md:-translate-x-1/2">
                <motion.img initial={{opacity:0}} animate={{opacity:1}} transition={{duration:5, delayChildren:5}} className=" w-6" src={loadGif} alt="" />
                <Typewriter
                    words={['Welcome to High Level', "Creating Video Tutorial"]}
                    loop={1} 
                    cursor
                    cursorStyle="_"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={8000} 
                  />
                 
                 </motion.button>

               
                  <ul className="hidden absolute -left-[3.5rem] o bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                 
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Code generation"
          
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          

          <BackgroundCircles />
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;