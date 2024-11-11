import React from "react";
import MenuItem from "../../../../components/MenuComponents/MenuItem";
import menuData from "../../../../data/menu_data.json";
import backgroundImage from "/assets/images/MenuImages/CoffeeEspressoMoreImage.jpg";

const Americano = () => {
  const coffeeData = menuData.filter(
    (item) => item.category === "Coffee, Espresso & More"
  );
  const coffeeItems = coffeeData.map((item) => item.items);
  const coffee = coffeeItems[0].filter(
    (item) =>
      item.name ===
      "Americano"
  )[0];

  return (
    <>
      <MenuItem
        data={coffee}
        title1={coffee.name}
        title2={coffee.name}
        backgroundImage={backgroundImage}
        itemImage={coffee.image}
      />
    </>
  );
};

export default Americano;
