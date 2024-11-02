import React, { useState } from "react";
import {
  MinusCircle,
  PlusCircle,
  AlertCircle,
  ChevronDown,
} from "lucide-react";

const PriceButton = ({ type, price, isActive }) => (
  <button
    className={`flex-1 py-3 rounded-full text-center font-medium ${
      isActive
        ? "bg-blue-500 text-white"
        : "bg-white text-black hover:bg-slate-50"
    }`}
  >
    {type} ₹{price}
  </button>
);

const NumberInput = ({ label, value, onChange, subtitle }) => (
  <div className="space-y-1">
    <div className="flex items-center gap-2">
      <h3 className="font-bold text-lg">{label}</h3>
      {label === "Quantity" && <span className="text-slate-400">⚙</span>}
    </div>
    {subtitle && <p className="text-slate-500 text-sm">{subtitle}</p>}
    <div className="flex items-center gap-2 bg-slate-50 p-1 rounded-xl">
      <button className="p-2 text-blue-500 hover:bg-slate-100 rounded-lg">
        <MinusCircle size={20} />
      </button>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full text-center bg-transparent focus:outline-none"
      />
      <button className="p-2 text-blue-500 hover:bg-slate-100 rounded-lg">
        <PlusCircle size={20} />
      </button>
    </div>
  </div>
);

function PlaceOrder() {
  const [price, setPrice] = useState("7.0");
  const [quantity, setQuantity] = useState("1");

  return (
    <div>
      <div className="bg-white border border-slate-200 rounded-2xl shadow-xl relative top-32 p-6 space-y-6 max-w-lg mx-auto">
        <div className="flex gap-3 p-1 bg-slate-50 rounded-full">
          <PriceButton type="Yes" price="7.0" isActive={true} />
          <PriceButton type="No" price="3.0" isActive={false} />
        </div>
        <div className="inline-block px-6 py-2 bg-white border border-slate-200 rounded-full text-sm">
          Set price
        </div>
        <div className="space-y-6">
          <NumberInput
            label="Price"
            value={price}
            onChange={setPrice}
            subtitle="977 qty available"
          />
          <NumberInput
            label="Quantity"
            value={quantity}
            onChange={setQuantity}
          />
        </div>
        <div className="flex justify-between px-4 py-2">
          <div className="text-center">
            <p className="text-xl font-medium">₹7.0</p>
            <p className="text-slate-500">You put</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-medium text-green-600">₹10.0</p>
            <p className="text-slate-500">You get</p>
          </div>
        </div>
        <button className="w-full flex items-center justify-center gap-2 text-slate-500">
          Advanced Options
          <ChevronDown size={20} />
        </button>
        <div className="flex items-center gap-3 bg-red-50 p-4 rounded-lg">
          <AlertCircle className="text-red-500" size={24} />
          <div>
            <p className="font-medium">Insufficient balance</p>
            <button className="text-slate-500 underline">Learn more</button>
          </div>
        </div>
        <button className="w-full py-4 bg-slate-100 rounded-xl font-medium text-slate-500">
          Place order
        </button>
      </div>
    </div>
  );
}

export default PlaceOrder;
