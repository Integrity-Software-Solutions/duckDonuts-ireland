import React from "react";
import FanFavoritesImage from "/assets/images/MenuImages/FanFavoritesImage.jpg";
import MenuItem from "../../components/MenuComponents/MenuItem";

const FanFavorites = () => {
  return (
    <>
      <MenuItem
        backgroundImage={FanFavoritesImage}
        alt="Fan Favorites"
        title="Fan Favorites"
      >
        {/* <div className="flex justify-self-center h-screen w-full bg-red-400 max-w-[60rem] my-10 mx-20">hello world</div> */}
      </MenuItem>
    </>
  );
};

export default FanFavorites;
