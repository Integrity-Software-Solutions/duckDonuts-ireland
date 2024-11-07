import React from "react";
import LemonadeAndRefreshersImage from "/assets/images/MenuImages/LemonadeAndRefreshersImage.jpg";
import MenuItem from "../../components/MenuComponents/MenuItem";

const LemonadeAndRefreshers = () => {
  return (
    <>
      <MenuItem
        backgroundImage={LemonadeAndRefreshersImage}
        alt="Lemonade and Refreshers Image"
        title="Lemonade & Refreshers"
      >
        {/* <div className="flex justify-self-center h-screen w-full bg-red-400 max-w-[60rem] my-10 mx-20">hello world</div> */}
      </MenuItem>
    </>
  );
};

export default LemonadeAndRefreshers;
