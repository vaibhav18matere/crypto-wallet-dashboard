import { BsEye } from "react-icons/bs";
import Banner from "./Banner";
import { Deposit, Referral, Swap, Wallet } from "../data/Icons";
import { cardData } from "../data/ProfitLossData";

const MiniCard = ({ title, plPercent, plAmount, btnText }) => {
  return (
    <div
      className={`p-2 rounded-lg shadow-md flex flex-col items-center text-center min-w-sm ${
        plPercent.startsWith("-") ? "bg-[#fcf0de]" : "bg-[#ecfaf0]"
      }`}
    >
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p
        className={`text-3xl font-bold ${
          plPercent.startsWith("-") ? "text-red-500" : "text-green-500"
        }`}
      >
        {plPercent}
      </p>
      <p
        className={`text-lg font-semibold mb-1  ${
          plAmount.startsWith("-") ? "text-red-500" : "text-green-500"
        }`}
      >
        {plAmount}
      </p>
      <button className="bg-black text-white rounded-full px-3 py-1 text-lg">
        {btnText}
      </button>
    </div>
  );
};

export default function PNLAnalysis() {
  const functionsData = [
    {
      title: "Deposit",
      icon: <Deposit />,
      bgColor: "#f0e202",
    },
    {
      title: "Referral",
      icon: <Referral />,
      bgColor: "#c5f1ff",
    },
    {
      title: "Swap",
      icon: <Swap />,
      bgColor: "#fed4c0",
    },
    {
      title: "Wallet",
      icon: <Wallet />,
      bgColor: "#ecfaf0",
    },
  ];

  return (
    <>
      <div className="container mx-auto p-4= max-w-2xl">
        <Banner />
        <h1 className="text-[#231F20] leading-6 font-medium bg-[#F0E303] border border-yellow-300 rounded-xl text-2xl p-1 text-center mt-2">
          PNL Analysis
        </h1>

        <div className="flex justify-around items-center mt-4">
          <div className="cursor-pointer bg-[#DFF0FF] rounded-full px-7 py-4 text-xl w-2/4 text-center flex justify-center items-center gap-2 shadow-md">
            <div className="text-md bg-black text-white p-1 rounded-full">
              <BsEye />
            </div>
            <p className="text-xs font-bold">Total Value (ALZ)</p>
          </div>

          <div className="flex justify-center items-center w-2/4 ">
            <select
              name="currency"
              id="currency"
              className="bg-black text-white rounded-full text-lg px-7 py-4 shadow-md cursor-pointer"
            >
              <option value="USD">USD</option>
              <option value="INR">INR</option>
              <option value="YEN">YEN</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center">
          <h1 className="text-5xl font-bold mb-3 text-[#231F20]">129,00.000</h1>
          <h2 className="text-xl bg-gray-300 px-4 py-2 text-center border border-gray-400 rounded-full">
            ~$898,090.0000
          </h2>

          <div className="flex flex-wrap gap-3 mt-6 justify-center">
            {functionsData.map((func, index) => (
              <div
                key={index}
                style={{ backgroundColor: func.bgColor }}
                className="flex flex-col items-center justify-center rounded-full w-24 h-24 p-2 shadow-md"
              >
                <span className="text-black text-2xl">{func.icon}</span>
                <p className="text-lg font-light mt-1">{func.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-[1rem] max-w-lg mx-auto my-0">
          {cardData.map((card, index) => (
            <MiniCard
              key={index}
              title={card.title}
              plPercent={card.plPercent}
              plAmount={card.plAmount}
              btnText={card.btnText}
              bgColor={card.bgColor}
            />
          ))}
        </div>
      </div>
    </>
  );
}
