import { useForm } from "react-hook-form";
import "./BookTable.css";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import { useRef } from 'react';
const PublicId = import.meta.env.VITE_EMAIL_API_PUBLIC;
const template = import.meta.env.VITE_EMAIL_API_TEMPLATE;
const service = import.meta.env.VITE_EMAIL_API_SERVICE;



const BookTable = () => {
  const { register, handleSubmit,reset } = useForm();
  const form = useRef();  

  const onSubmit = (data) => {
    const { message, reserveDate, totalPeople, email, name } = data;
    if (totalPeople <= 0) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Please enter a valid number of people.",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    const information={message, reserveDate, totalPeople, email, name }
    console.log(information)

    emailjs.sendForm(
      service,
      template,
      form.current,  
      PublicId
    )
    .then(
      () => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Please Check Email.",
          showConfirmButton: false,
          timer: 1500,
        });
        reset()
      },
      (error) => {
        console.log('FAILED...',error.text);
      }
    );
  };

  return (
    <div id="booktable" className="bookTable-image h-auto bg-no-repeat ">
      <div className="md:py-36 md:px-[300px] py-5 px-5">
        
        <div className="flex flex-row items-center">
          <span className="w-[10px] h-[10px] bg-[#BD1F17] flex items-center justify-center mr-2"></span>
          <h1 className="text-[#BD1F17] font-bold md:text-xl text-[10px]">
            Book Now
          </h1>
        </div>
        <h3 className="font-bold md:text-[62px] text-[40px] text-[#FFFFFF]">
          Book Your Table
        </h3>
        <p className="font-normal text-[16px] text-[#F7F8F9] leading-relaxed">
          Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
          <span className="inline md:hidden">&nbsp;</span>
          <span className="hidden md:inline">
            <br />
          </span>
          molestie vel, ornare non id blandit netus.
        </p>
        
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          
          <div className="flex md:flex-row flex-col gap-6 md:mt-10 mt-5">
            <div className="input-group mb-3">
              <input
                {...register("name", { required: true })}
                type="text"
                className="form-control md:w-[302px] h-[46px] w-[280px] pl-2 bg-[#1D1D1D] text-[#FFFFFF] border border-[#E5E7EB]"
                placeholder="Your Name *"
                aria-label="Username"
              />
            </div>
            <div className="input-group mb-3 text-[#FFFFFF]">
              <input
                {...register("email", { required: true })}
                type="email"
                className="form-control md:w-[302px] h-[46px] w-[280px] pl-2 bg-[#1D1D1D] border border-[#E5E7EB]"
                placeholder="Your Email"
                aria-label="Username"
              />
            </div>
          </div>
          
          <div className="flex md:flex-row flex-col gap-6 mt-5">
            <div className="input-group mb-3">
              <input
                {...register("reserveDate", { required: true })}
                type="date"
                className="form-control md:w-[302px] h-[46px] w-[280px] pl-2 bg-[#1D1D1D] text-[#FFFFFF] border border-[#E5E7EB]"
                placeholder="Reservation Date"
              />
            </div>
            <div className="input-group mb-3 text-[#FFFFFF]">
              <input
                {...register("totalPeople", { required: true })}
                type="number"
                className="form-control md:w-[302px] h-[46px] w-[280px] pl-2 bg-[#1D1D1D] border border-[#E5E7EB]"
                placeholder="Total People"
              />
            </div>
          </div>
         
          <div className="mt-5">
            <div className="form-floating mb-3">
              <textarea
                {...register("message", { required: true })}
                className="form-control bg-[#1D1D1D] text-[#FFFFFF] border border-[#E5E7EB] w-[280px] 
                md:w-[628px] h-[100px] p-2"
                placeholder="Message"
              ></textarea>
            </div>
            <input
              className="uppercase bg-[#FEBF00] px-[24px] py-[10px] text-[#0A1425] text-[16px] font-bold"
              type="submit"
              value="Book Now"
            />
          </div>
        </form>
        
      </div>
    </div>
  );
};

export default BookTable;
