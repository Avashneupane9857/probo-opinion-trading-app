import { graph, logo, up1, up3 } from "../assets";

function Cards() {
  const trades = [
    { title: "India's Strong Opening Partnership", img: up1 },
    { title: "Spin Dominance by Indian Bowlers", img: up3 },
    { title: "Middle Order Batting Resilience", img: graph },
    { title: "Aggressive Captaincy Tactics", img: logo },
    { title: "Tail-Enders Contributing Crucial Runs", img: {} },
  ];

  return (
    <div className="mt-10">
      <h1 className="mb-6">All Options</h1>
      <div className="bg-black h-[0.5px] w-[70%]"></div>
      <div className="grid grid-cols-2 gap-6">
        {trades.map((trade) => (
          <div
            key={trade.title}
            className="bg-white rounded-2xl w-full mt-4 h-52"
          >
            <div className="p-10 flex gap-10">
              <img
                src={trade.img}
                className="w-32 h-20 rounded-3xl object-fit border-[0.5px]"
                alt=""
              />
              <h1>{trade.title}</h1>
            </div>
            <div className="pl-20 flex gap-16">
              <button className="text-blue-500 bg-blue-100 w-36 rounded-lg p-1">
                Yes
              </button>
              <button className="text-red-500 bg-red-100 w-36 rounded-lg p-1">
                No
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
