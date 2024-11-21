import React from "react";
import backgroundImage from "/assets/images/MenuImages/IceCream.jpg";
import MenuItem from "../../../../components/MenuComponents/MenuItem";
import menuData from "../../../../data/menu_data.json";

const ChocolateMilkshake = () => {
  const iceCreamData = menuData.filter((item) => item.category === "Ice Cream");
  const iceCreamItems = iceCreamData.map((item) => item.items);
  const iceCream = iceCreamItems[0].filter(
    (item) => item.name === "Chocolate Milkshake"
  )[0];
  return (
    <>
      <MenuItem
        data={iceCream}
        title1={iceCream.name}
        title2={iceCream.name}
        backgroundImage={backgroundImage}
        itemImage={iceCream.image}
      />
    </>
  );
};

export default ChocolateMilkshake;
