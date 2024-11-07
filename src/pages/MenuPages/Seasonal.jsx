import React from "react";
import SeasonalImage from "/assets/images/MenuImages/SeasonalImage.jpg";
import MenuItem from "../../components/MenuComponents/MenuItem";
// now import the menu_data.json file and access the seasonal data
import menuData from "../../data/menu_data.json";

const Seasonal = () => {
  let data = menuData['Seasonal'];
  const determineSeason = () => {
    if (new Date().getMonth() >= 8 && new Date().getMonth() <= 11) {
      return "Fall";
    } else if (new Date().getMonth() >= 5 && new Date().getMonth() <= 7) {
      return "Summer";
    } else if (new Date().getMonth() >= 2 && new Date().getMonth() <= 4) {
      return "Spring";
    } else {
      return "Winter";
    }
  };

  if (determineSeason() === "Fall") {
    data = data['fall'];
  }

  return (
    <>
      <MenuItem
        backgroundImage={SeasonalImage}
        alt="Seasonal Image"
        title="Seasonal"
        centerTitle={true}
        data={data}
      >
      </MenuItem>
    </>
  );
};

export default Seasonal;
