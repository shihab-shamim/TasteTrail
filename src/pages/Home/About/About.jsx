import { useState } from "react";

import { LuPhoneCall } from "react-icons/lu";

const About = () => {
    const [about, setAbout] = useState("#B52B1D");
    const [experience, setExperience] = useState("");
    const [contact, setContact] = useState("");
    const [aboutcontent,setContent]=useState(true)
    const [experiencecontent,setExperiencecontent]=useState(false)
    const [contactcontent,setContactcontent]=useState(false)

    const handleBg= a =>{
        
        if(a==='a'){
            setAbout("#B52B1D")
            setExperience('')
            setContact('')
            setContent(true)
            setExperiencecontent(false)
            setContactcontent(false)

        }
        if(a==='b'){
            setExperience('#B52B1D')
            setAbout('')
            setContact('')
            setContent(false)
            setExperiencecontent(true)
            setContactcontent(false)
        }
        if(a==='c'){
            setContact('#B52B1D')
            setExperience('')
            setAbout('')
            setContent(false)
            setExperiencecontent(false)
            setContactcontent(true)
        }

    }
    return (
        <div className=" mt-8 md:mt-44 relative">
          <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row p-8 md:p-0 gap-12">
          <div className=" w-full md:w-[50%]">
            <img src="about .png" alt="" className="w-[600px]" />
          </div>
          <div className="w-full md:w-[50%] mt-8 md:mt-0">
            <div className="flex gap-6">
                <button href="#" onClick={()=>handleBg('a')}  style={{
        backgroundColor: about,
        color: about ? '#ffffff' : '#000000'
    }} className={`bg-[${about}] px-4 py-1`}>About</button>
                <button href="#" onClick={()=>handleBg('b')}  style={{
        backgroundColor: experience,
        color: experience ? '#ffffff' : '#000000'
    }} className={`bg-[${experience}] px-4 py-1 `}>Experience</button>
                <button href="#" onClick={()=>handleBg('c')}  style={{
        backgroundColor: contact,
        color: contact ? '#ffffff' : '#000000'
    }} className={` px-4 py-1 text-white`}>Contact</button>
            </div>
            <hr className="bg-red-600 h-[1px] border-0" />

            {
                aboutcontent && <div>
                <h1 className=" text-[20px] md:text-[35px] font-bold uppercase leading-[20px] md:leading-[35px] mt-8">Exceptional culinary <br /> experience and delicious food</h1>
                            <p className="mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
                      <div className="flex gap-12  items-center">
                      <button className= " mt-12 uppercase bg-[#FEBF00] px-[14px] md:px-[24px] py-[8px] md:py-[10px] text-[#0A1425] text-[16px] font-bold">About More</button>
                      <p className="flex gap-2 items-center mt-8"><LuPhoneCall color="red" /> +88 3426 739 485</p>
                      </div>
                </div>
            }
            {
                experiencecontent && <div>
                <h1 className=" text-[20px] md:text-[35px] font-bold uppercase leading-[20px] md:leading-[35px] mt-8">Phosfluorescently leverage <br /> other's integrated alignments.</h1>
                            <p className="mt-8">Phosfluorescently redefine cross-platform opportunities through efficient markets. Efficiently parallel task leveraged testing procedures through leveraged mindshare. Credibly supply resource sucking relationships via virtual customer service. Credibly communicate ethical niche markets with optimal vortals. Quickly scale dynamic schemas for equity invested information.</p>
                      <div className="flex gap-12  items-center">
                      <button className= " mt-12 uppercase bg-[#FEBF00] px-[14px] md:px-[24px] py-[8px] md:py-[10px] text-[#0A1425] text-[16px] font-bold">About More</button>
                      <p className="flex gap-2 items-center mt-8"><LuPhoneCall color="red" /> +88 3426 739 485</p>
                      </div>
                </div>
            }
            {
                contactcontent && <div>
                <h1 className=" text-[20px] md:text-[35px] font-bold uppercase leading-[20px] md:leading-[35px] mt-8">Quickly disseminate <br /> go forward metrics with.</h1>
                            <p className="mt-8">Synergistically simplify flexible content and premier internal or "organic" sources. Continually extend an expanded array of alignments after enterprise communities. Rapidiously generate distributed models and sustainable resources. Completely transition fully researched channels for dynamic portals. Distinctively syndicate 24/365 niche markets via go forward.</p>
                      <div className="flex gap-12  items-center">
                      <button className= " mt-12 uppercase bg-[#FEBF00] px-[14px] md:px-[24px] py-[8px] md:py-[10px] text-[#0A1425] text-[16px] font-bold">About More</button>
                      <p className="flex gap-2 items-center mt-8"><LuPhoneCall color="red" /> +88 3426 739 485</p>
                      </div>
                </div>
            }



          </div>
        
          </div>
          <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">

            <div className="flex items-center mt-8 md:mt-0">
                <div><img src="a.png"  className="max-w-[90px]" alt="" /></div>
                <div>
                    <h1 className="text-[30px] text-[#0A1425] uppercase  font-bold">fast delivery</h1>
                    <p className="text-[20px] text-[#0A1425]">Within 30 minutes</p>
                </div>
            </div>
            <div className="flex items-center mt-8 md:mt-0">
                <div><img src="b.png"  className="max-w-[90px]" alt="" /></div>
                <div>
                    <h1 className="text-[30px] text-[#0A1425] uppercase  font-bold">absolute dining</h1>
                    <p className="text-[20px] text-[#0A1425]">Best buffet restaurant</p>
                </div>
            </div>
            <div className="flex items-center mt-8 md:mt-0">
                <div><img src="c.png"  className="max-w-[90px]" alt="" /></div>
                <div>
                    <h1 className="text-[30px] text-[#0A1425] uppercase  font-bold">pickup delivery</h1>
                    <p className="text-[20px] text-[#0A1425]">Grab your food order</p>
                </div>
            </div>
            
          </div>
          
            <div className="absolute right-0 bottom-12 hidden md:flex">
                <img src="fol.png" alt="" />
            </div>
        </div>
    );
};

export default About;