const Banner = () => {
  return (
    <div className="bg-red-800 py-0 md:py-36">
      <div className="relative max-w-[1320px] mx-auto flex flex-col md:flex-row lg:flex-row">
        <div className="grow absolute top-28 z-50">
          <img
            className="absolute ml-10 z-20 opacity-60 hidden md:flex"
            src="hedingBg.png"
            alt=""
          />

          <h2 className="text-[#FFFFFF] z-50 text-[48px] leading-[52px] sm:text-[48px] md:text-[120px] font-semibold uppercase  sm:leading-[48px] md:leading-[110px] ml-5 md:m-0">
            Taste the authentic
            <br />
            Saudi cuisine
          </h2>

          <p className="text-[#FFFFFF] text-[20px] leading-[25px] md:text-[24px]  md:leading-[32px] mt-8  ml-5 md:m-0">
            Among the best Saudi chefs in the world, serving{" "}
            <br className=" hidden md:flex" /> you something beyond flavor.{" "}
          </p>

          <button className="mt-10 uppercase bg-[#FEBF00] px-[24px] py-[10px] text-[#0A1425] text-[16px] font-bold ml-5 md:ml-0 ">
            Explore Menu
          </button>
        </div>
       
        <div className="grow md:mt-[500px] mt-[400px] lg:mt-0 md:ml-[200px] lg:ml-[655px] relative mb-10 ml-5 md:m-0 ">
          <img
            className="w-[330px] h-[180px] md:w-[700px] md:h-[650px] "
            src="banner.png"
            alt=""
          />
          <img
            src="victor.png"
            alt=""
            className="absolute md:-top-8 -top-9 md:right-[88px] lg:-top-9 -right-0.5 lg:-right-8"
          />
          <div className="bg-[#FEBF00] w-[60px] h-[60px] md:w-[105px] md:h-[105px] rounded-full p-1 absolute bottom-2 md:bottom-0 left-[260px] md:left-[600px] right-0 md:-right-12">
            <img src="offer.png" alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
