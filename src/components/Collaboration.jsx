import { brainwaveSymbol, check } from '../assets';
import { collabApps, collabContent, collabText } from '../constants';
import Facebook from '../assets/Facebook.png'
import Button from './Button';
import Section from './Section';
import {LeftCurve, RightCurve} from "./design/Collaboration"
import GoogleAdds from '../assets/GoogleAdds.png'
import LeadPages from '../assets/LeadPages.png'
import GoogleSheets from '../assets/GoogleSheets.png'
import Gmail from '../assets/Gmail.webp'
import ClickFunnels from '../assets/ClickFunnels.svg'
import SurveyGizmo from '../assets/SurveyGizmo.png'
import ActiveCampaign from '../assets/ActiveCampaign.jpg'
function Collaboration() {
    const collabApps = [
        {
          id: "0",
          title: "Facebook",
          icon: Facebook,
          width: 46,
          height: 36,
        },
        {
            id: "1",
            title: "GoogleAdds",
            icon: GoogleAdds,
            width: 46,
            height: 36,
          },
          {
            id: "2",
            title: "LeadPages",
            icon: LeadPages,
            width: 46,
            height: 36,
          },
          {
            id: "3",
            title: "GoogleSheets",
            icon: GoogleSheets,
            width: 46,
            height: 36,
          },
          {
            id: "4",
            title: "SurveyGizmo",
            icon: SurveyGizmo,
            width: 46,
            height: 36,
          },
          {
            id: "5",
            title: "ActiveCampaign",
            icon: ActiveCampaign,
            width: 46,
            height: 36,
          },
          {
            id: "6",
            title: "Gmail",
            icon: Gmail,
            width: 46,
            height: 36,
          },
          {
            id: "7",
            title: "ClickFunnels",
            icon: ClickFunnels,
            width: 46,
            height: 36,
          },
      ];
  return (
    <Section crosses>
        <div className='container lg:flex'>
            <div className='max-w-[25rem]'>
                <h2 data-aos="fade-right" className='h2 mb-4 md:mb-8'>
                Building The Digital Marketing Engine
                </h2>
                <ul className='max-w-[22rem] mb-10 md:mb-14'> 
                 
                        <li data-aos="fade-up-right" className='mb-3 py-3'> 
                            <div className='flex item-center'>
                                <img src={check} width={24} height={24} alt="check" />
                                <h6 className='body-2 ml-5'> CAPTURE </h6>
                            </div>
                            <p className='body-2 mt-3 text-n-4'> Capture leads using our landing pages, surveys, forms, calendars, inbound phone system & more! </p>
                        </li>
                        <li data-aos="fade-up-right" className='mb-3 py-3'> 
                            <div className='flex item-center'>
                                <img src={check} width={24} height={24} alt="check" />
                                <h6 className='body-2 ml-5'> NURTURE </h6>
                            </div>
                            <p className='body-2 mt-3 text-n-4'> Automatically message leads via voicemail, forced calls, SMS, emails, FB Messenger & more! </p>
                        </li>
                        <li data-aos="fade-up-right" className='mb-3 py-3'> 
                            <div className='flex item-center'>
                                <img src={check} width={24} height={24} alt="check" />
                                <h6 className='body-2 ml-5'> CLOSE </h6>
                            </div>
                            <p className='body-2 mt-3 text-n-4'> Use our built in tools to collect payments, schedule appointments, and track analytics! </p>
                        </li>
                    
                </ul>
            </div>
            <div className='lg:ml-auto xl:w-[38rem]'>
               <p  className='text-n-4 mb-16 pl-10 '>All the tools you need in one platform without having to "duct-tape" multiple platforms together!</p>
                <div  className=' relative left-1/2 flex w-[18rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75
                md:scale-100'>
                    <div data-aos="flip-down" className='flex w-60 aspect-square m-auto border border-n-6 rounded-full'>
                        <div data-aos="flip-down" className='w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full'>
                            <div  className='flex items-center justify-center w-full h-full bg-n-8 rounded-full'>
                                <img src={brainwaveSymbol} width={48} height={48} alt="brainwave" />
                            </div>
                        </div>
                    </div>
                    <ul className=''   >
                       {collabApps.map((app, index)=>(
                        <li   key={app.id} className={`absolute 
                        top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom 
                        rotate-${index * 45}`}>
                            <div className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl
                            -rotate-${index *45} `}>
                                <img className='m-auto' width={app.width} height={app.height} src={app.icon} alt={app.title} />
                            </div>
                        </li>
                       ))} 
                    </ul>
                    <LeftCurve/>
                    <RightCurve/>
                </div>
            </div>
        </div>
    </Section>
  )
}

export default Collaboration