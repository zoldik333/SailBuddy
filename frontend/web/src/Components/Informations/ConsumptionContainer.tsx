import React from 'react';
import ClassicButton from "../Buttons/ClassicButton";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

interface ConsumptionProps {
  image: string;
  title: string;
  data: number;
  type: string;
}

export default function ConsumptionContainer({image, title, data, type} : ConsumptionProps) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className={"flex flex-col gap-8 w-full"}>
      <div className={"flex flex-row gap-8"}>
        <img src={image} alt={""} className="h-24 w-24 "/>
        <div className={"flex flex-col gap-6 h-full"}>
          <div className={"text-[#1A2B78] text-[1.2em]"}>{title}</div>
          <div className={"text-[#1A2B78] text-[1.5em] font-bold"}>{data} {type}</div>
        </div>
      </div>
      <ClassicButton content={t("WatchData")} onClick={() => navigate('/dashboard')} />
    </div>
  )
}