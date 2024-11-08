import React from "react";
import FanFavoritesImage from "/assets/images/MenuImages/FanFavoritesImage.jpg";
import MenuItem from "../../components/MenuComponents/MenuItem";
import menuData from  "../../data/menu_data.json";

const FanFavorites = () => {
  const fanFavoritesData = menuData.filter((data) => data.category === "Fan Favorites");
  return (
    <>
      <MenuItem
        backgroundImage={FanFavoritesImage}
        alt="Fan Favorites"
        title="Fan Favorites"
        data={fanFavoritesData}
      >
      </MenuItem>
    </>
  );
};

export default FanFavorites;
