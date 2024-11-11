import React from "react";
import MenuItem from "../../../../components/MenuComponents/MenuItem";
import menuData from "../../../../data/menu_data.json";
import backgroundImage from "/assets/images/MenuImages/LemonadeAndRefreshersImage.jpg";

const BlueberryPoppingBubbles = () => {
  const lemonadeData = menuData.filter(
    (item) => item.category === "Lemonade & Refreshers"
  );
  const lemonadeItems = lemonadeData.map((item) => item.items);
  const lemonade = lemonadeItems[0].filter(
    (item) =>
      item.name ===
      "Blueberry Popping Bubbles"
  )[0];

  return (
    <>
      <MenuItem
        data={lemonade}
        title1={lemonade.name}
        title2={lemonade.name}
        backgroundImage={backgroundImage}
        itemImage={lemonade.image}
      />
    </>
  );
};

export default BlueberryPoppingBubbles;
