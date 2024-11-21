import React from "react";
import MenuItem from "../../../../components/MenuComponents/MenuItem";
import menuData from "../../../../data/menu_data.json";
import backgroundImage from "/assets/images/MenuImages/FanFavoritesImage.jpg";

const FallFavoritesHalfDozen = () => {
  const seasonalData = menuData.filter((item) => item.category === "Seasonal");
  const seasonalItems = seasonalData.map(
    (item) => item.seasons.fall.featuredItems
  );
  const seasonalItem = seasonalItems[0].filter(
    (item) => item.name === "Fall Favorites Half Dozen"
  )[0];

  return (
    <>
      <MenuItem
        data={seasonalItem}
        title1={seasonalItem.name}
        title2={seasonalItem.name}
        backgroundImage={backgroundImage}
        itemImage={seasonalItem.image}
      />
    </>
  );
};

export default FallFavoritesHalfDozen;
