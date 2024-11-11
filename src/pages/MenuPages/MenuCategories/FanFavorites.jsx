import React from "react";
import FanFavoritesImage from "/assets/images/MenuImages/FanFavoritesImage.jpg";
import MenuCategory from "../../../components/MenuComponents/MenuCategory";
import menuData from "../../../data/menu_data.json";

const FanFavorites = () => {
  const fanFavoritesData = menuData.filter(
    (data) => data.category === "Fan Favorites"
  );
  return (
    <>
      <MenuCategory
        backgroundImage={FanFavoritesImage}
        alt="Fan Favorites"
        title1="Fan Favorites"
        title2="Fan Favorites"
        data={fanFavoritesData}
      />
    </>
  );
};

export default FanFavorites;
