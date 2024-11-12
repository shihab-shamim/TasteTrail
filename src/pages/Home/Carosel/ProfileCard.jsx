

const ProfileCard = ({title,dis,img}) => (
  <div className="w-[306px] max-h[300px] overflow-hidden bg-white  shadow-lg dark:bg-gray-800 px-4 py-12 mt-16">
    <img
      className="object-cover max-w-[186px] mx-auto max-h-[86px] pt-4"
      src={img}
      alt="avatar"
    />
    <img className="max-w-[57px] mx-auto mt-2 " src="line.png" alt="" />
    <div className="py-5 text-center">
      <h2 className="block text-[24px] font-bold text-[#0A1425] uppercase">
       {title}
      </h2>
      <span className="text-[16px] text-[#0A1425] mt-4">{dis}</span>
    </div>
  </div>
);

export default ProfileCard;
