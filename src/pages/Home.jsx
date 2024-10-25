import React, { useEffect, useState } from "react";
import DuckDonutsLogo from "../assets/images/HomePageImages/DuckDozen.jpg";
import ChocolateCoveredStrawberry from "../assets/images/HomePageImages/ChocolateCoveredStrawberry.png";
import MenuDrinks from "../assets/images/HomePageImages/MenuDrinks.png";
import MenuIceCream from "../assets/images/HomePageImages/MenuIceCream.png";
import LemonadeRefreshers from "../assets/images/HomePageImages/LemonadeRefreshers.png";
import MenuSandwiches from "../assets/images/HomePageImages/MenuSandwiches.png";
import MenuItemCards from "../components/HomePageComponents/MenuItemCards";

const Home = () => {
  const [showBackground, setShowBackground] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowBackground(true);
    }, 1000);
  }, []);

  return (
    <div className="max-w-[2200px] m-auto z-10">
      {/* Warm Delicious Made to Order */}
      {/* h-[6.46rem] */}
      <section
        id="MainstageScroller"
        className="-mt-[6.46rem] h-screen flex items-center justify-center bg-cover bg-center text-white"
        style={{
          backgroundImage: `${showBackground ? `url(${DuckDonutsLogo})` : ""}`,
          textShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="ml-auto mr-auto w-full max-w-[60rem] font-extrabold italic uppercase opacity-100">
          <div className="text-center">
            <div className="flex flex-col">
              <span className="py-2 text-7xl">Warm, Delicious</span>
              <span className="py-4 text-8xl">Made to Order</span>
              <div className="flex items-center justify-center mt-4">
                <div className="w-36 h-[0.32rem] bg-white mr-2"></div>
                <div className="text-2xl mx-2 font-bold not-italic">
                  CUSTOMIZED BEFORE YOUR EYES
                </div>
                <div className="w-36 h-[0.32rem] bg-white ml-2"></div>
              </div>
              <div className="flex justify-center space-x-10 mt-10">
                <button className="bg-[#E6427A] text-base font-[650] p-4 rounded-full w-60 transition ease-in-out duration-500 shadow-2xl hover:cursor-pointer hover:bg-sky-400">
                  Order Online
                </button>
                <button className="bg-[#E6427A] text-base font-[650] p-4 rounded-full w-60 transition ease-in-out duration-500 shadow-2xl hover:cursor-pointer hover:bg-sky-400">
                  Seasonal Flavors
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section
        id="MenuProductTypeFeed"
        className="flex items-center justify-center py-20 px-5"
      >
        <div className="max-w-[71.8rem] h-full w-full px-2 grid grid-cols-4 gap-x-4 justify-items-center">
          <MenuItemCards image={ChocolateCoveredStrawberry} cardTitle={"Fan Favorites"} index={0} />
          <MenuItemCards image={MenuDrinks} cardTitle={"Coffee, Espresso & More"} index={1}/>
          <MenuItemCards image={MenuIceCream} cardTitle={"Ice Cream"} index={2}/>
          <MenuItemCards image={LemonadeRefreshers} cardTitle={"Lemonade & Refreshers"} index={3}/>
          <MenuItemCards image={MenuSandwiches} cardTitle={"Sandwiches"} index={4}/>
        </div>
      </section>
      <section
        id="SeasonalContentv1"
        className="bg-orange-300 h-screen flex items-center justify-center"
      >
        hello world
      </section>
      <section className="bg-purple-300 h-screen flex items-center justify-center">
        hello world
      </section>
    </div>
  );
};

export default Home;
