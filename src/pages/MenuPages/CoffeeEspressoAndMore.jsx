import React from "react";
import CoffeeEspressoMoreImage from "/assets/images/MenuImages/CoffeeEspressoMoreImage.jpg";
import MenuItem from "../../components/MenuComponents/MenuItem";
import menuData from "../../data/menu_data.json";

const CoffeeEspressoAndMore = () => {
  const coffeeEspressoAndMoreData = menuData.filter(
    (data) => data.category === "Coffee, Espresso & More"
  );
  return (
    <>
      <MenuItem
        backgroundImage={CoffeeEspressoMoreImage}
        alt="Coffee, Espresso, and More Image"
        title1="Coffee, Espresso, & More"
        title2="Coffee, Espresso, & More"
        data={coffeeEspressoAndMoreData}
      />
    </>
  );
};

export default CoffeeEspressoAndMore;
