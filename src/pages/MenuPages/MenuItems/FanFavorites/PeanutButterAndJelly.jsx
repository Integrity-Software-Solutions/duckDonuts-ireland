import React from "react";
import MenuItem from "../../../../components/MenuComponents/MenuItem";
import menuData from "../../../../data/menu_data.json";
import backgroundImage from "/assets/images/MenuImages/FanFavoritesImage.jpg";

const PeanutButterAndJelly = () => {
  const fanFavoritesData = menuData.filter(
    (item) => item.category === "Fan Favorites"
  );
  const fanFavoritesDonuts = fanFavoritesData.map((item) => item.items);
  const donut = fanFavoritesDonuts[0].filter(
    (item) => item.name === "Peanut Butter & Jelly"
  )[0];

  return (
    <>
      <MenuItem
        data={donut}
        title1={donut.name}
        title2={donut.name}
        backgroundImage={backgroundImage}
        itemImage={donut.image}
      />
    </>
  );
};

export default PeanutButterAndJelly;
