import React from 'react';
import WaterContainer from "../Graphics/WaterContainer";
import EnergieGraphic from "../Graphics/EnergieGraphic";

interface QuantityProps {
  type : string;
  quantity : number;
}

export default function QuantityContainer({type, quantity} : QuantityProps) {
  return (
    <div className={"w-full flex flex-col gap-8"}>
      <div className={"text-[#1A2B78] font-bold text-[1.3em]"}>Quantité d&#39;{type} à bord</div>
      <div className={"w-auto bg-[#FFE8D7] p-16 rounded-2xl"}>
        {type === "eau" ?<WaterContainer value={quantity}/> : <EnergieGraphic />}
      </div>
      <div className={" text-[#EF4445] font-bold text-[1.3em] bg-[#FFD3B9] rounded-full px-8 py-2 text-center"}>
        {quantity}% d&#39;{type} restante
      </div>
    </div>
  )
}
