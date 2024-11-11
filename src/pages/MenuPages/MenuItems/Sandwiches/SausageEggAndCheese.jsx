import React from "react";
import MenuItem from "../../../../components/MenuComponents/MenuItem";
import menuData from "../../../../data/menu_data.json";
import backgroundImage from "/assets/images/MenuImages/SandwichesImage.jpg";

const SausageEggAndCheese = () => {
  const sandwichesData = menuData.filter(
    (item) => item.category === "Sandwiches"
  );
  const sandwichesItems = sandwichesData.map((item) => item.items);
  const sandwich = sandwichesItems[0].filter(
    (item) =>
      item.name ===
      "Sausage, Egg, and Cheese Breakfast Sandwich"
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

export default SausageEggAndCheese;
