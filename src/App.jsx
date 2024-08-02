import Navbar from "./components/Navbar";
import GreetUser from "./components/GreetUser";
import PriceNav from "./components/PriceNav";
import AssetNetWorth from "./components/AssetNetWorth";
import Wallets from "./components/Wallets";
import RegisteredUsers from "./components/RegisteredUsers";
import PNLAnalysis from "./components/PNLAnalysis";
import WalletDetails from "./components/WalletDetails";

function App() {
  return (
    <>
      <Navbar />
      <div className="ml-20">
        <GreetUser />
        <PriceNav />
        <div className="flex">
          <div className="basis-[40%]">
            <AssetNetWorth />
          </div>
          <div className="basis-[30%]">
            <Wallets />
          </div>
          <div className="basis-[30%]">
            <PNLAnalysis />
          </div>
        </div>
        <div className="flex">
          <div className="basis-[70%]">
            <RegisteredUsers />
          </div>
          <div className="basis-[30%]">
            <WalletDetails />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
