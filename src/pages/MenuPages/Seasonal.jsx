import React from "react";
import SeasonalImage from "/assets/images/MenuImages/SeasonalImage.jpg";
import MenuItem from "../../components/MenuComponents/MenuItem";
import menuData from "../../data/menu_data.json";

const Seasonal = (props) => {
  const seasonalData = menuData.filter((data) => data.category === "Seasonal");
  let data = seasonalData[0].seasons[props.season];
  data = [
    {
      category: seasonalData[0].category,
      description: seasonalData[0].description,
      ...data,
    },
  ];

  return (
    <>
      <MenuItem
        backgroundImage={SeasonalImage}
        alt="Seasonal"
        title1="Seasonal"
        title2="Seasonal Offerings"
        data={data}
        centerText={true}
        boldText={true}
      ></MenuItem>
    </>
  );
};

export default Seasonal;
