import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Seasonal from "./pages/MenuPages/Seasonal";
import IceCream from "./pages/MenuPages/IceCream";
import Sandwiches from "./pages/MenuPages/Sandwiches";
import FanFavorites from "./pages/MenuPages/FanFavorites";
import MadeToOrderDonuts from "./pages/MenuPages/MadeToOrderDonuts";
import LemonadeAndRefreshers from "./pages/MenuPages/LemonadeAndRefreshers";
import EverydayAssortments from "./pages/MenuPages/EverydayAssortments";
import CoffeeEspressoAndMore from "./pages/MenuPages/CoffeeEspressoAndMore";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import seasonData from "./data/season_data.json";
import Donuts from "./pages/Donuts";

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
              <Route path="/menu/donuts" element={<Donuts season={season} />} />
              <Route path="/menu/seasonal" element={<Seasonal season={season} />} />
              <Route path="/menu/ice-cream" element={<IceCream />} />
              <Route path="/menu/sandwiches" element={<Sandwiches />} />
              <Route path="/menu/fan-favorites" element={<FanFavorites />} />
              <Route path="/menu/made-to-order-donuts" element={<MadeToOrderDonuts />} />
              <Route path="/menu/everyday-assortments" element={<EverydayAssortments />} />
              <Route path="/menu/lemonade-refreshers" element={<LemonadeAndRefreshers />} />
              <Route path="/menu/coffee-espresso-more" element={<CoffeeEspressoAndMore />} />
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
