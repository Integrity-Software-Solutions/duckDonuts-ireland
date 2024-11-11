import React from "react";
import MenuItem from "../../../../components/MenuComponents/MenuItem";
import menuData from "../../../../data/menu_data.json";
import backgroundImage from "/assets/images/MenuImages/SandwichesImage.jpg";

const BaconInTheSun = () => {
  const sandwichesData = menuData.filter(
    (item) => item.category === "Sandwiches"
  );
  const sandwichesItems = sandwichesData.map((item) => item.items);
  const sandwich = sandwichesItems[0].filter(
    (item) =>
      item.name ===
      "Maple Drizzle, Chopped Bacon, Sausage, Egg & Cheese Breakfast Sandwich"
  )[0];

  return (
    <>
      <MenuItem
        data={sandwich}
        title1={sandwich.name}
        title2={sandwich.name}
        backgroundImage={backgroundImage}
        itemImage={sandwich.image}
      />
    </>
  );
};

export default BaconInTheSun;
