import React from "react";
import IceCreamImage from "/assets/images/MenuImages/IceCream.jpg";
import MenuItem from "../../components/MenuComponents/MenuItem";

const IceCream = () => {
  return (
    <>
      <MenuItem
        backgroundImage={IceCreamImage}
        alt="Ice Cream"
        title="Ice Cream"
      />
    </>
  );
};

export default IceCream;
