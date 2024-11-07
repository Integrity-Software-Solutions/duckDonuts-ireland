import React from "react";
import MadeToOrderDonutsImage from "/assets/images/MenuImages/MadeToOrderDonutsImage.jpg";
import MenuItem from "../../components/MenuComponents/MenuItem";

const MadeToOrderDonuts = () => {
  return (
    <>
      <MenuItem
        backgroundImage={MadeToOrderDonutsImage}
        alt="Made To Order Donuts Image"
        title="Made-to-Order Donuts"
      >
        {/* <div className="flex justify-self-center h-screen w-full bg-red-400 max-w-[60rem] my-10 mx-20">hello world</div> */}
      </MenuItem>
    </>
  );
};

export default MadeToOrderDonuts;
