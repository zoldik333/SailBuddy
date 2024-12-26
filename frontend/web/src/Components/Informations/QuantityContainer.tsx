import React from 'react';
import WaterContainer from "../Graphics/WaterContainer";
import EnergieGraphic from "../Graphics/EnergieGraphic";
import {useTranslation} from "react-i18next";

interface QuantityProps {
  quantity : number;
  type: number;
}

export default function QuantityContainer({quantity, type} : QuantityProps) {

  const { t } = useTranslation();

  return (
    <div className={"w-full flex flex-col gap-8"}>
      <div className={"text-[#1A2B78] font-bold text-[1.3em]"}>{type === 0 ? t('QuantityOfWater') : t('QuantityOfEnergy')}</div>
      <div className={"w-auto bg-[#FFE8D7] rounded-2xl h-auto p-8"}>
        {type === 0 ?<WaterContainer value={quantity}/> : <EnergieGraphic />}
      </div>
      <div className={" text-[#EF4445] font-bold text-[1.3em] bg-[#FFD3B9] rounded-full px-8 py-2 text-center"}>
        {quantity}% {type === 0 ? t('RemainingWater') : t('RemainingEnergy')}
      </div>
    </div>
  )
}
