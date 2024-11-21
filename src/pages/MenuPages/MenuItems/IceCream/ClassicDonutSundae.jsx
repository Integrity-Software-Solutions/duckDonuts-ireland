import React from "react";
import backgroundImage from "/assets/images/MenuImages/IceCream.jpg";
import MenuItem from "../../../../components/MenuComponents/MenuItem";
import menuData from "../../../../data/menu_data.json";

const ClassicDonutSundae = () => {
  const iceCreamData = menuData.filter((item) => item.category === "Ice Cream");
  const iceCreamItems = iceCreamData.map((item) => item.items);
  const iceCream = iceCreamItems[0].filter(
    (item) => item.name === "Classic Donut Sundae"
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

export default ClassicDonutSundae;
