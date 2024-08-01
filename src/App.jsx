import React from "react";
import Navbar from "./components/Navbar";
import GreetUser from "./components/GreetUser";
import PriceNav from "./components/PriceNav";
import AssetNetWorth from "./components/AssetNetWorth";
import Wallets from "./components/Wallets";
import RegisteredUsers from "./components/RegisteredUsers";
import PNLAnalysis from "./components/PNLAnalysis";

function App() {
  return (
    <div className="min-h-screen flex flex-row container">
      {/* Navbar */}
      <nav>
        <Navbar />
      </nav>

      {/* Main Content */}
      <main className="flex-grow ml-20">
        <div className="flex flex-col">
          <GreetUser />
          <PriceNav />
        </div>

        <div className="grid grid-cols-12 gap-4 p-2">
          {/* First div (approximately 1/3 of the available space) */}
          <div className="col-span-8">
            <div className="flex gap-4">
              <AssetNetWorth />
              <Wallets /> 
            </div>
            <RegisteredUsers />
          </div>

          {/* Second div (remaining space) */}
          <div className="col-span-4">
            <PNLAnalysis />
          </div>
        </div>

        {/* RegisteredUsers component */}
      </main>
    </div>
  );
}

export default App;
