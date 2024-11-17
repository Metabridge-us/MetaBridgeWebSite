import SoundWave from '../assets/SoundWave.gif'
import UserOne from '../assets/UserOne.webp'
import UserTwo from '../assets/UserTwo.webp'
import AwardImge from '../assets/AwardImge.png'
  import coaching from '../assets/coaching.png'
  import XLogo from '../assets/XLogo.png'
  import FacebookLogo from '../assets/FacebookLogo.png'
  import InstagramLogo from '../assets/InstagramLogo.png'
  import YoutubeLogo from '../assets/YoutubeLogo.png'
  import LinkeLogo from '../assets/LinkeLogo.png'
import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitImage2,
    chromecast,
    disc02,
    discord,
    discordBlack,
    facebook,
    figma,
    file02,
    framer,
    homeSmile,
    instagram,
    notification2,
    notification3,
    notification4,
    notion,
    photoshop,
    plusSquare,
    protopie,
    raindrop,
    recording01,
    recording03,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    searchMd,
    slack,
    sliders04,
    telegram,
    twitter,
    yourlogo,
  } from "../assets";
  
  export const navigation = [
    {
      id: "0",
      title: "Features",
      url: "#features",
    },
    {
      id: "1",
      title: "Pricing",
      url: "#pricing",
    },
    {
      id: "2",
      title: "How to use",
      url: "#how-to-use",
    },
    {
      id: "3",
      title: "Roadmap",
      url: "#roadmap",
    },
    {
      id: "4",
      title: "New account",
      url: "#signup",
      onlyMobile: true,
    },
    {
      id: "5",
      title: "Sign in",
      url: "#login",
      onlyMobile: true,
    },
  ];
  
  export const heroIcons = [homeSmile, file02, searchMd, plusSquare];
  
  export const notificationImages = [notification4, notification3, notification2];
  
  export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];
  
  export const brainwaveServices = [
    "Photo generating",
    "Photo enhance",
    "Seamless Integration",
  ];
  
  export const brainwaveServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
  ];
  
  export const roadmap = [
    {
      id: "0",
      title: "Create Membership Areas and Close More Deals",
      text: "Create a thriving community for your business or for your clients by using our Membership Platform. Our thriving community of the most successful and visionary digital marketers on the planet.",
      status: "done",
      imageUrl: SoundWave,
      user:UserOne,
      userTwo: UserTwo,
      speech:"I felt completely supported as soon as I join the platform...These guys care about my business and have taken my business to the next level.",
      colorful: true,
    },
    {
      id: "1",
      title: "Grow Your Business With...",
      text: "THOUSANDS of other marketers to learn how they’re being successful and growing their business with HighLevel...and how you can do the same too..",
      status: "done",
      imageUrl: coaching,
    },
    {
      id: "2",
      title: "Award-Winning Support",
      text: "We are striving to offer the best possible support to our customers..",
      status: "done",
      imageUrl:AwardImge,
    },
    {
      id: "3",
      title: "We're In The Business Of Helping You Grow Your Business",
      text: "HighLevel is the first-ever all-in-one platform that will give you the tools, support and resources you need to succeed and crush your marketing goals..",
      status: "done",
      imageUrl: roadmap4,
      
     
    },
  ];
  
  
  export const collabText =
    "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";
  
  export const collabContent = [
    {
      id: "0",
      title: "Seamless Integration",
      text: collabText,
    },
    {
      id: "1",
      title: "Smart Automation",
    },
    {
      id: "2",
      title: "Top-notch Security",
    },
  ];
  
  export const collabApps = [
    {
      id: "0",
      title: "Figma",
      icon: figma,
      width: 26,
      height: 36,
    },
    {
      id: "1",
      title: "Notion",
      icon: notion,
      width: 34,
      height: 36,
    },
    {
      id: "2",
      title: "Discord",
      icon: discord,
      width: 36,
      height: 28,
    },
    {
      id: "3",
      title: "Slack",
      icon: slack,
      width: 34,
      height: 35,
    },
    {
      id: "4",
      title: "Photoshop",
      icon: photoshop,
      width: 34,
      height: 34,
    },
    {
      id: "5",
      title: "Protopie",
      icon: protopie,
      width: 34,
      height: 34,
    },
    {
      id: "6",
      title: "Framer",
      icon: framer,
      width: 26,
      height: 34,
    },
    {
      id: "7",
      title: "Raindrop",
      icon: raindrop,
      width: 38,
      height: 32,
    },
  ];
  
  export const pricing = [
    {
      id: "0",
      title: "Starter",
      price: "97.00",
      features: [
        "ALL THE TOOLS TO CAPTURE More LEADS",
        "NURTURE & CLOSE LEADS Into customers",
        "FULL ONLINE BOOKING, PIPELINES, SOCIAL CAL, WEBSITE BUILDER, AND MORE!",
        "UNLIMITED CONTACTS & USERS, add as many contacts & users as you need!",
        "Setup up to Three Sub-Accounts"
      ],
    },
    
    {
      id: "1",
      title: "Unlimited",
      price: "297",
      features: [
        "EVERYTHING IN THE STARTER PLAN",
        "API Access - Integrate With anything",
        "unlimited sub-accounts - As many client accounts as you need for one price!",
        "BRANDED desktop app - Custom domains and complete control over the look and feel of the platform!"
      ],
    },
  ];
  
  export const benefits = [
    {
      id: "0",
      title: "Ask anything",
      text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
      backgroundUrl: "./src/assets/benefits/card-1.svg",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
    },
    {
      id: "1",
      title: "Improve everyday",
      text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
      backgroundUrl: "./src/assets/benefits/card-2.svg",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
      light: true,
    },
    {
      id: "2",
      title: "Connect everywhere",
      text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
      backgroundUrl: "./src/assets/benefits/card-3.svg",
      iconUrl: benefitIcon3,
      imageUrl: benefitImage2,
    },
    {
      id: "3",
      title: "Fast responding",
      text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
      backgroundUrl: "./src/assets/benefits/card-4.svg",
      iconUrl: benefitIcon4,
      imageUrl: benefitImage2,
      light: true,
    },
    {
      id: "4",
      title: "Ask anything",
      text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
      backgroundUrl: "./src/assets/benefits/card-5.svg",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
    },
    {
      id: "5",
      title: "Improve everyday",
      text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
      backgroundUrl: "./src/assets/benefits/card-6.svg",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
    },
  ];
  
  export const socials = [
    {
      id: "0",
      title: "X",
      iconUrl: XLogo,
      url: "https://x.com/gohighlevel",
    },
    {
      id: "1",
      title: "Facebook",
      iconUrl: FacebookLogo,
      url: "https://www.facebook.com/highlevelreviews",
    },
    {
      id: "2",
      title: "Instagram",
      iconUrl: InstagramLogo,
      url: "https://www.instagram.com/gohighlevel/",
    },
    {
      id: "3",
      title: "Youtube",
      iconUrl: YoutubeLogo,
      url: "https://www.youtube.com/channel/UCXFiV4qDX5ipE-DQcsm1j4g",
    },
    {
      id: "4",
      title: "LinkedIn",
      iconUrl: LinkeLogo,
      url: "https://www.linkedin.com/company/highlevel",
    },
  ];