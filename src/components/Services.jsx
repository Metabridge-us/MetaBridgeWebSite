import { service1 } from "../assets";
import Heading from "./Heading"
import Section from "./Section";
import SecondLoad from '../assets/SecondLoad.gif'
import Service4 from '../assets/Service4.png'
import { service2, check} from "../assets";
import { Typewriter } from 'react-simple-typewriter';
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Generating from "./Generating";
import {PhotoChatMessage, Gradient, VideoBar, VideoChatMessage} from "./design/Services"
function Services() {
  return (
    <Section id="Services">
        <div className="container">
            <Heading  title="Productuvity in Hight Level Mode." text="Brainwave unlocks the potential of AI-Powered Applications."/>
            <div className="relative ">
                <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10
                 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
                        <img data-aos="fade-up" data-aos-duration="3000" className="w-full h-full object-cover md:object-right" width={800} height={730} src={service1} alt="Smartest 
                        AI" />
                    </div>
                    <div className="relative z-1 max-w-[17rem] ml-auto">
                        <h4 data-aos="fade-down"data-aos-easing="linear" data-aos-duration="1500" className="h4 mb-4">Fully Automated Booking</h4>
                        <p data-aos="fade-down"data-aos-easing="linear" data-aos-duration="1500" className="body-2 mb-[3rem] text-n-3">Automatically book leads and prospects to your calendar without lifting a finger.</p>
                        <ul data-aos="fade-down"data-aos-easing="linear" data-aos-duration="1500" className="body-2">
                            {brainwaveServices.map((item, index)=>(
                                <li key={index} className="flex items-start py-4 border-t border-n-6">
                                    <img width={24} height={24} src={check} alt="" />
                                    <p className="ml-4">{item}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2
                    lg-right-auto lg:bottom-8 lg:-translate-x-1/2"/>
                </div>
                <div className="relative z-1 grid gap-5 lg:grid-cols-2">
                    <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
                        <div className="absolute inset-0">
                            <img data-aos="fade-up" data-aos-duration="3000" src={service2} alt="robot" className="h-full w-full object-cover" width={630} height={750} />
                        </div>
                        <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b-from-n-8/0 to-n-8/90 lg:p-15">
                            <h4 data-aos="fade-down"data-aos-easing="linear" data-aos-duration="1500" className="h4 mb-4">Nurture Leads Into Customers</h4>
                            <p data-aos="fade-down"data-aos-easing="linear" data-aos-duration="1500" className="body-2 mb-[3rem] text-n-3">The backbone of HighLevel is what you are able to accomplish after you capture the lead.</p>
                        </div>
                        <PhotoChatMessage/>
                    </div>
                    <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
                        <div className="py-12 px-4 xl:px-8">
                            <h4 data-aos="fade-up" data-aos-anchor-placement="center-center" className="h4 mb-4">Capture New Leads</h4>
                            <p data-aos="fade-up" data-aos-anchor-placement="center-center" className="body-2 mb-[2rem] text-n-3">
                            HighLevel is a Full Suite Platform for Marketers. Included in the Platform is a full featured Page Builder to capture leads.
                            </p>
                            <button data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className=" flex items-center gap-2 max-w-full bg-slate-500 p-3 rounded-xl">
                                <img  className="w-8" src={SecondLoad} alt={SecondLoad} />
                                <Typewriter
                                words={['CREATE FULl WEBSITES, funnels & LANDING PAGES', "DRAG & DROP SURVEYS AND FORMS", "ONLINE APPOINTMENT SCHEDULING"]}
                                loop={0} 
                                cursor
                                cursorStyle="_"
                                typeSpeed={200}
                                deleteSpeed={70}
                                delaySpeed={5000} 
                                />
                           
                            
                            </button>
                        </div>
                        <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                            <img data-aos="fade-up" data-aos-duration="3000" src={Service4} className="w-full h-full object-cover" height={400} width={520} alt="Scary Robot" />
                            <VideoChatMessage/>
                            <VideoBar/>
                        </div>
                    </div>
                </div>
                <Gradient/>
            </div>
        </div>
    </Section>
  )
}

export default Services