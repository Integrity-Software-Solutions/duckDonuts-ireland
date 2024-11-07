import React from "react";
import SandwichesImage from "/assets/images/MenuImages/SandwichesImage.jpg";
import MenuItem from "../../components/MenuComponents/MenuItem";

const Sandwiches = () => {
  return (
    <>
      <MenuItem
        backgroundImage={SandwichesImage}
        alt="Sandwiches Image"
        title="Sandwiches"
      >
        {/* <div className="flex justify-self-center h-screen w-full bg-red-400 max-w-[60rem] my-10 mx-20">hello world</div> */}
      </MenuItem>
    </>
  );
};

export default Sandwiches;
