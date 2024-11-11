import React from "react";
import LemonadeAndRefreshersImage from "/assets/images/MenuImages/LemonadeAndRefreshersImage.jpg";
import MenuItem from "../../components/MenuComponents/MenuItem";
import menuData from "../../data/menu_data.json";

const LemonadeAndRefreshers = () => {
  const lemonadeAndRefreshersData = menuData.filter(
    (data) => data.category === "Lemonade & Refreshers"
  );

  return (
    <>
      <MenuItem
        backgroundImage={LemonadeAndRefreshersImage}
        alt="Lemonade and Refreshers Image"
        title1="Lemonade & Refreshers"
        title2="Lemonade & Refreshers"
        data={lemonadeAndRefreshersData}
      />
    </>
  );
};

export default LemonadeAndRefreshers;
