import React from "react";
import IceCreamImage from "/assets/images/MenuImages/IceCream.jpg";
import MenuItem from "../../components/MenuComponents/MenuItem";
import menuData from "../../data/menu_data.json";

const IceCream = () => {
  const iceCreamData = menuData.filter((data) => data.category === "Ice Cream");

  return (
    <>
      <MenuItem
        backgroundImage={IceCreamImage}
        alt="Ice Cream"
        title1="Ice Cream"
        title2="Ice Cream"
        data={iceCreamData}
      />
    </>
  );
};

export default IceCream;
