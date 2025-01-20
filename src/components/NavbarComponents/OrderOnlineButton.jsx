import React from "react";
import { Link } from "react-router-dom";

const OrderOnlineButton = () => {
  return (
    <Link to="/order-online" className="transition ease-in-out delay-75 duration-700 bg-[#E6427A] rounded-l-[5rem] hidden sm:flex items-center justify-center text-white p-[1.1rem] text-xl font-bold pl-8 self-center shadow-xl shadow- hover:cursor-pointer hover:bg-[#FFE87C]">
      Order Online!
    </Link>
  );
};

export default OrderOnlineButton;
