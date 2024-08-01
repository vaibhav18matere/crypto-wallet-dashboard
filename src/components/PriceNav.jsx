import { BinanceIcon } from "../data/Icons";

export default function PriceNav() {
  const data = {
    Price: "$123,456",
    "24 Hour Volume": "$123,456B",
    "24 Hour Change": "-23%",
    "Market Cap": "$23B",
  };

  const getChangeColor = (value) => {
    return value.startsWith("-") ? "text-red-500" : "text-green-500";
  };

  return (
    <div className="flex justify-evenly items-center container gap-4 bg-blue-200 border rounded-lg">
      <div className="flex gap-3">
        <BinanceIcon />
        <h1 className="text-[#F0B90B] text-2xl font-bold leading-5">Binance</h1>
      </div>
      <ul className="flex justify-evenly items-center text-lg p-4 gap-8">
        {Object.entries(data).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong>{" "}
            <span
              className={key === "24 Hour Change" ? getChangeColor(value) : ""}
            >
              {value}
            </span>
          </li>
        ))}
      </ul>
      <h1 className="text-green-900 text-lg font-bold">Coinbase</h1>
    </div>
  );
}
