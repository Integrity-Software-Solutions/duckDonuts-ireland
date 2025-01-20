import React from "react";
import ComingSoonClock from "../../public/assets/images/ComingSoonImages/ComingSoonClock";

const OrderOnline = () => {
  return (
    <div className="w-full h-full flex justify-center items-center bg-yellow-100 pt-12">
      <div className="h-full w-full relative flex justify-center items-center">
        <div className="block sm:hidden"><ComingSoonClock height="250px" width="250px" fill="#E6427A" opacity="0.2" /></div>
        <div className="hidden sm:block"><ComingSoonClock height="450px" width="450px" fill="#E6427A" opacity="0.2" /></div>
        <div className="absolute top-8 sm:top-20 text-lg sm:text-2xl uppercase text-[#23A3DD] font-bold">Online Ordering Is</div>
        <div className="absolute text-5xl sm:text-7xl font-extrabold text-[#E6427A] uppercase max-w-xs xl:max-w-[500px] text-center tracking-widest">Coming Soon</div>
        <div className="absolute  bottom-8 sm:bottom-20 text-lg sm:text-2xl uppercase text-[#23A3DD] font-bold">Stay Tuned!</div>
      </div>
    </div>
  );
};

export default OrderOnline;
