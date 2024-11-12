import "./Footer.css"
import clock from "../../../../public/Footer/clock.png"
import phone from "../../../../public/Footer/call-alt.png"
import mail from "../../../../public/Footer/mail.png"
import address from "../../../../public/Footer/map-pin.png"

import facebook from "../../../../public/Footer/Facebook.png"
import x from "../../../../public/Footer/Twitter.png"
import linkedIn from "../../../../public/Footer/LinkedIn.png"
import instagram from "../../../../public/Footer/Instagram.png"
import { Parallax } from "react-parallax"
import img from "../../../../public/FooterImg.jpg"

const Footer = () => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="The Footer Image"
      strength={-200}
    >
      <div className="h-auto bg-no-repeat bg-fixed bg-cover bg-center">
        <div className="md:py-36 md:px-[300px] py-5 px-5 bg-opacity-60 bg-[#000000CC]">
          <h3 className="font-bold md:text-6xl text-[40px] text-center text-[#FFFFFF]">
            We are ready to offer you the best dining experiences
          </h3>

          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:mt-10 mt-5">
            
            <div className="flex flex-col items-center text-center">
              <img src={clock} alt="" />
              <h2 className="font-bold text-2xl text-[#FFFFFF] mt-5">
                Opening hours
              </h2>
              <p className="font-normal text-[#F7F8F9] mt-3">
                Monday - Sunday <br /> 9:00 AM to 11:30 PM
              </p>
            </div>

            
            <div className="flex flex-col items-center text-center">
              <img src={phone} alt="" />
              <h2 className="font-bold text-2xl text-[#FFFFFF] mt-5">
                LET&apos;S TALK
              </h2>
              <p className="font-normal text-[#F7F8F9] mt-3">
                Phone: 1-800-222-4545 <br /> Fax: 1-800-222-4545
              </p>
            </div>

            
            <div className="flex flex-col items-center text-center">
              <img src={mail} alt="" />
              <h2 className="font-bold text-2xl text-[#FFFFFF] mt-5">
                BOOK A TABLE
              </h2>
              <p className="font-normal text-[#F7F8F9] mt-3">
                Email: demo@website.com <br /> Support: support@website.com
              </p>
            </div>

            
            <div className="flex flex-col items-center text-center">
              <img src={address} alt="" />
              <h2 className="font-bold text-2xl text-[#FFFFFF] mt-5">
                Our Address
              </h2>
              <p className="font-normal text-[#F7F8F9] mt-3">
                123 Street, New York City, United <br /> States Of America.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center items-center h-full mt-20">
            <div className="grid grid-cols-4 gap-4 place-items-center">
              <img src={facebook} alt="Facebook" className="" />
              <img src={x} alt="X (formerly Twitter)" className="" />
              <img src={instagram} alt="Instagram" className="" />
              <img src={linkedIn} alt="LinkedIn" className="" />
            </div>
          </div>
          <p className="text-center mt-3 text-[#FFFFFF]">
            © 2023 All Rights Reserved
          </p>
        </div>
      </div>
    </Parallax>
  )
}

export default Footer
