import React from "react";
import SandwichesImage from "/assets/images/MenuImages/SandwichesImage.jpg";
import MenuCategory from "../../../components/MenuComponents/MenuCategory";
import menuData from "../../../data/menu_data.json";

const Sandwiches = () => {
  const sandwichesData = menuData.filter(
    (data) => data.category === "Sandwiches"
  );

  return (
    <>
      <MenuCategory
        backgroundImage={SandwichesImage}
        alt="Sandwiches Image"
        title1="Sandwiches"
        title2="Sandwiches"
        data={sandwichesData}
      />
    </>
  );
};

export default Sandwiches;
