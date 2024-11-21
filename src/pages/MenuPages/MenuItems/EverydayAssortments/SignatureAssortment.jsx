import React from "react";
import MenuItem from "../../../../components/MenuComponents/MenuItem";
import menuData from "../../../../data/menu_data.json";
import backgroundImage from "/assets/images/MenuImages/FanFavoritesImage.jpg";

const SignatureAssortment = () => {
  const everydayAssortmentsData = menuData.filter(
    (item) => item.category === "Everyday Assortments"
  );
  const everydayAssortmentItems = everydayAssortmentsData.map((item) => item.items);
  const everydayAssortment = everydayAssortmentItems[0].filter(
    (item) =>
      item.name ===
      "Signature Assortment"
  )[0];

  return (
    <>
      <MenuItem
        data={everydayAssortment}
        title1={everydayAssortment.name}
        title2={everydayAssortment.name}
        backgroundImage={backgroundImage}
        itemImage={everydayAssortment.image}
      />
    </>
  );
};

export default SignatureAssortment;
