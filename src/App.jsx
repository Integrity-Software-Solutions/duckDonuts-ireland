import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Seasonal from "./pages/MenuPages/MenuCategories/Seasonal";
import IceCream from "./pages/MenuPages/MenuCategories/IceCream";
import Sandwiches from "./pages/MenuPages/MenuCategories/Sandwiches";
import FanFavorites from "./pages/MenuPages/MenuCategories/FanFavorites";
import MadeToOrderDonuts from "./pages/MenuPages/MenuCategories/MadeToOrderDonuts";
import LemonadeAndRefreshers from "./pages/MenuPages/MenuCategories/LemonadeAndRefreshers";
import EverydayAssortments from "./pages/MenuPages/MenuCategories/EverydayAssortments";
import CoffeeEspressoAndMore from "./pages/MenuPages/MenuCategories/CoffeeEspressoAndMore";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import seasonData from "./data/season_data.json";
import Donuts from "./pages/Donuts";
import BaconInTheSun from "./pages/MenuPages/MenuItems/FanFavorites/BaconInTheSun";
import BeachBall from "./pages/MenuPages/MenuItems/FanFavorites/BeachBall";
import BlueberryLemonade from "./pages/MenuPages/MenuItems/FanFavorites/BlueberryLemonade";
import BlueberryPancake from "./pages/MenuPages/MenuItems/FanFavorites/BlueberryPancake";
import ChocolateCaramelCrunch from "./pages/MenuPages/MenuItems/FanFavorites/ChocolateCaramelCrunch";
import ChocolateCoveredStrawberry from "./pages/MenuPages/MenuItems/FanFavorites/ChocolateCoveredStrawberry";
import ChocolateExplosion from "./pages/MenuPages/MenuItems/FanFavorites/ChocolateExplosion";
import CinnamonBun from "./pages/MenuPages/MenuItems/FanFavorites/CinnamonBun";
import CoconutIslandBliss from "./pages/MenuPages/MenuItems/FanFavorites/CoconutIslandBliss";
import CookiesAndCream from "./pages/MenuPages/MenuItems/FanFavorites/CookiesAndCream";
import FrenchToast from "./pages/MenuPages/MenuItems/FanFavorites/FrenchToast";
import MapleBacon from "./pages/MenuPages/MenuItems/FanFavorites/MapleBacon";
import MidnightMadness from "./pages/MenuPages/MenuItems/FanFavorites/MidnightMadness";
import PeanutButterAndJelly from "./pages/MenuPages/MenuItems/FanFavorites/PeanutButterAndJelly";
import PeanutButterParadise from "./pages/MenuPages/MenuItems/FanFavorites/PeanutButterParadise";
import PinaColada from "./pages/MenuPages/MenuItems/FanFavorites/PinaColada";
import RaspberryFluff from "./pages/MenuPages/MenuItems/FanFavorites/RaspberryFluff";
import SandDollar from "./pages/MenuPages/MenuItems/FanFavorites/SandDollar";
import Smores from "./pages/MenuPages/MenuItems/FanFavorites/Smores";
import StrawberryConfetti from "./pages/MenuPages/MenuItems/FanFavorites/StrawberryConfetti";
import StrawberryShortcake from "./pages/MenuPages/MenuItems/FanFavorites/StrawberryShortcake";
import Sunrise from "./pages/MenuPages/MenuItems/FanFavorites/Sunrise";
import TheBeach from "./pages/MenuPages/MenuItems/FanFavorites/TheBeach";
import TheBoardwalk from "./pages/MenuPages/MenuItems/FanFavorites/TheBoardwalk";
import TheFlipFlop from "./pages/MenuPages/MenuItems/FanFavorites/TheFlipFlop";
import MapleDrizzle from "./pages/MenuPages/MenuItems/Sandwiches/MapleDrizzle";
import BaconEggAndCheese from "./pages/MenuPages/MenuItems/Sandwiches/BaconEggAndCheese";
import SausageEggAndCheese from "./pages/MenuPages/MenuItems/Sandwiches/SausageEggAndCheese";
import EggAndCheese from "./pages/MenuPages/MenuItems/Sandwiches/EggAndCheese";
import OriginalLemonade from "./pages/MenuPages/MenuItems/LemonadeAndRefreshers/OriginalLemonade";
import StrawberryLemonade from "./pages/MenuPages/MenuItems/LemonadeAndRefreshers/StrawberryLemonade";
import RaspberryDragonfruitLemonadeRefresher from "./pages/MenuPages/MenuItems/LemonadeAndRefreshers/RaspberryDragonfruitLemonadeRefresher";
import CitrusMangoPineappleLemonadeRefresher from "./pages/MenuPages/MenuItems/LemonadeAndRefreshers/CitrusMangoPineappleLemonadeRefresher";
import BlueberryPoppingBubbles from "./pages/MenuPages/MenuItems/LemonadeAndRefreshers/BlueberryPoppingBubbles";
import ColdBrewCoffee from "./pages/MenuPages/MenuItems/CoffeeEspressoAndMore/ColdBrewCoffee";
import Americano from "./pages/MenuPages/MenuItems/CoffeeEspressoAndMore/Americano";
import Cappuccino from "./pages/MenuPages/MenuItems/CoffeeEspressoAndMore/Cappuccino";
import Lattes from "./pages/MenuPages/MenuItems/CoffeeEspressoAndMore/Lattes";
import CaramelMacchiatos from "./pages/MenuPages/MenuItems/CoffeeEspressoAndMore/CaramelMacchiatos";
import Mochas from "./pages/MenuPages/MenuItems/CoffeeEspressoAndMore/Mochas";
import Espresso from "./pages/MenuPages/MenuItems/CoffeeEspressoAndMore/Espresso";
import HotChocolate from "./pages/MenuPages/MenuItems/CoffeeEspressoAndMore/HotChocolate";
import CoffeeFrappe from "./pages/MenuPages/MenuItems/CoffeeEspressoAndMore/CoffeeFrappe";
import MochaFrappe from "./pages/MenuPages/MenuItems/CoffeeEspressoAndMore/MochaFrappe";
import CaramelFrappe from "./pages/MenuPages/MenuItems/CoffeeEspressoAndMore/CaramelFrappe";
import PumpkinMacchiato from "./pages/MenuPages/MenuItems/CoffeeEspressoAndMore/PumpkinMacchiato";

function App() {
  const determineSeason = () => {
    const currentDate = new Date();
    
    // Loop through each season and check if currentDate is within the season's date range
    for (let season of seasonData) {
      const start = new Date(season.startDate);
      const end = new Date(season.endDate);
  
      // Adjust for end date at year boundaries
      if (start <= currentDate && currentDate <= end) {
        return season.season;
      }
    }
  
    // Default to "winter" if no match
    return "winter";
  };
  
  const season = determineSeason();

  return (
    <div className="flex flex-col min-h-screen items-center">
    <Router>
      <div className="w-full  flex flex-col min-h-screen relative">
          <Navbar />
        <main className="flex-grow mx-auto max-w-[2055px] w-full">
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu season={season} />} />

              {/* menu categories */}
              <Route path="/menu/donuts" element={<Donuts season={season} />} />
              <Route path="/menu/seasonal" element={<Seasonal season={season} />} />
              <Route path="/menu/ice-cream" element={<IceCream />} />
              <Route path="/menu/sandwiches" element={<Sandwiches />} />
              <Route path="/menu/fan-favorites" element={<FanFavorites />} />
              <Route path="/menu/made-to-order-donuts" element={<MadeToOrderDonuts />} />
              <Route path="/menu/everyday-assortments" element={<EverydayAssortments />} />
              <Route path="/menu/lemonade-refreshers" element={<LemonadeAndRefreshers />} />
              <Route path="/menu/coffee-espresso-more" element={<CoffeeEspressoAndMore />} />

              {/* menu items */}
                {/* seasonal */}

                {/* Fan Favorites */}
                <Route path="/menu/donuts/smores" element={<Smores />} />
                <Route path="/menu/donuts/sunrise" element={<Sunrise />} />
                <Route path="/menu/donuts/the-beach" element={<TheBeach />} />
                <Route path="/menu/donuts/beach-ball" element={<BeachBall />} />
                <Route path="/menu/donuts/maple-bacon" element={<MapleBacon />} />
                <Route path="/menu/donuts/pina-colada" element={<PinaColada />} />
                <Route path="/menu/donuts/sand-dollar" element={<SandDollar />} />
                <Route path="/menu/donuts/cinnamon-bun" element={<CinnamonBun />} />
                <Route path="/menu/donuts/french-toast" element={<FrenchToast />} />
                <Route path="/menu/donuts/the-flip-flop" element={<TheFlipFlop />} />
                <Route path="/menu/donuts/the-boardwalk" element={<TheBoardwalk />} />
                <Route path="/menu/donuts/cookies-cream" element={<CookiesAndCream />} />
                <Route path="/menu/donuts/bacon-in-the-sun" element={<BaconInTheSun />} />
                <Route path="/menu/donuts/raspberry-fluff" element={<RaspberryFluff />} />
                <Route path="/menu/donuts/midnight-madness" element={<MidnightMadness />} />
                <Route path="/menu/donuts/blueberry-pancake" element={<BlueberryPancake />} />
                <Route path="/menu/donuts/blueberry-lemonade" element={<BlueberryLemonade />} />
                <Route path="/menu/donuts/chocolate-explosion" element={<ChocolateExplosion />} />
                <Route path="/menu/donuts/strawberry-confetti" element={<StrawberryConfetti />} />
                <Route path="/menu/donuts/coconut-island-bliss" element={<CoconutIslandBliss />} />
                <Route path="/menu/donuts/peanut-butter-jelly" element={<PeanutButterAndJelly />} />
                <Route path="/menu/donuts/strawberry-shortcake" element={<StrawberryShortcake />} />
                <Route path="/menu/donuts/peanut-butter-paradise" element={<PeanutButterParadise />} />
                <Route path="/menu/donuts/chocolate-caramel-crunch" element={<ChocolateCaramelCrunch />} />
                <Route path="/menu/donuts/chocolate-covered-strawberry" element={<ChocolateCoveredStrawberry />} />
                {/* Everyday Assortments */}

                {/* Coffee, Espresso & More */}
                <Route path="/menu/coffee-espresso-more/mochas" element={<Mochas />} />
                <Route path="/menu/coffee-espresso-more/lattes" element={<Lattes />} />
                <Route path="/menu/coffee-espresso-more/espresso" element={<Espresso />} />
                <Route path="/menu/coffee-espresso-more/americano" element={<Americano />} />
                <Route path="/menu/coffee-espresso-more/cappuccino" element={<Cappuccino />} />
                <Route path="/menu/coffee-espresso-more/mocha-frappe" element={<MochaFrappe />} />
                <Route path="/menu/coffee-espresso-more/hot-chocolate" element={<HotChocolate />} />
                <Route path="/menu/coffee-espresso-more/coffee-frappe" element={<CoffeeFrappe />} />
                <Route path="/menu/coffee-espresso-more/caramel-frappe" element={<CaramelFrappe />} />
                <Route path="/menu/coffee-espresso-more/cold-brew-coffee" element={<ColdBrewCoffee />} />
                <Route path="/menu/coffee-espresso-more/pumpkin-macchiato" element={<PumpkinMacchiato />} />
                <Route path="/menu/coffee-espresso-more/caramel-macchiatos" element={<CaramelMacchiatos />} />

                {/* Ice Cream */}

                {/* Lemonade & Refreshers */}
                <Route path="/menu/lemonade-refreshers/original-lemonade" element={<OriginalLemonade />} />
                <Route path="/menu/lemonade-refreshers/strawberry-lemonade" element={<StrawberryLemonade />} />
                <Route path="/menu/lemonade-refreshers/blueberry-popping-bubbles" element={<BlueberryPoppingBubbles />} />
                <Route path="/menu/lemonade-refreshers/raspberry-dragonfruit-lemonade-refresher" element={<RaspberryDragonfruitLemonadeRefresher />} />
                <Route path="/menu/lemonade-refreshers/citrus-mango-pineapple-lemonade-refresher" element={<CitrusMangoPineappleLemonadeRefresher />} />

                {/* Sandwiches */}
                <Route path="/menu/sandwiches/egg-cheese-breakfast-sandwich" element={<EggAndCheese />} />
                <Route path="/menu/sandwiches/sausage-egg-and-cheese-with-chopped-bacon" element={<MapleDrizzle />} />
                <Route path="/menu/sandwiches/bacon-egg-and-cheese-breakfast-sandwich" element={<BaconEggAndCheese />} />
                <Route path="/menu/sandwiches/sausage-egg-and-cheese-breakfast-sandwich" element={<SausageEggAndCheese />} />

                {/* Made to Order Donuts */}
                
            </Routes>
          </ScrollToTop>
        </main>
        <Footer />
      </div>
    </Router>
  </div>
  );
}

export default App;
