import React from "react";
import CoffeeEspressoMoreImage from "/assets/images/MenuImages/CoffeeEspressoMoreImage.jpg";
import MenuCategory from "../../components/MenuComponents/MenuCategory";
import menuData from "../../data/menu_data.json";

const CoffeeEspressoAndMore = () => {
  const coffeeEspressoAndMoreData = menuData.filter(
    (data) => data.category === "Coffee, Espresso & More"
  );
  return (
    <>
      <MenuCategory
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
