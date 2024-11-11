import React from "react";
import MenuItem from "../../../../components/MenuComponents/MenuItem";
import menuData from "../../../../data/menu_data.json";
import backgroundImage from "/assets/images/MenuImages/CoffeeEspressoAndMoreImages/PumpkinMacchiato.jpg";

const PumpkinMacchiato = () => {
  const coffeeData = menuData.filter(
    (item) => item.category === "Coffee, Espresso & More"
  );

  const coffeeItems = coffeeData.map((item) => item.featuredItems);
  const coffee = coffeeItems[0].filter(
    (item) => item.name === "Pumpkin Macchiato"
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

export default PumpkinMacchiato;
