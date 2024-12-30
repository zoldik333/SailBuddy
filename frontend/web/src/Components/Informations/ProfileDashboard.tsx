import React from 'react';
import Titles from "../Text/Titles";
import ClassicButton from "../Buttons/ClassicButton";
import ConsumptionContainer from "./ConsumptionContainer";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";

export default function ProfileDashboard() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="bg-[#FFD3B9] h-screen w-[30%] fixed top-0 right-0 rounded-l-3xl p-12 flex flex-col gap-16 overflow-auto">
      <div className={"flex flex-row gap-8"}>
        <img src={"assets/profile/profile_template.png"} alt={""} className="h-36 w-36 object-cover rounded-2xl border-l-4 border-b-4 border-[#1A2B78]" />
        <div className={"h-auto flex flex-col justify-between"}>
          <Titles title={"Prénom"} size={2.4} />
          <div className={"text-[#1A2B78] font-bold text-2xl"}>Propriétaire du bateau ...</div>
        </div>
      </div>
      <div className={"flex flex-col gap-8"}>
        <ClassicButton content={t('AccessProfil')} onClick={() => navigate('/profile')} />
        <Titles title={t("DailyCons")} size={1.5} />
        <div className="flex flex-col w-full h-auto gap-8">
          <div className="border-b-2 border-[#1A2B78] pb-8">
            <ConsumptionContainer image={"assets/infos/icon-water.webp"} title={t("Water")} data={36} type={"L"} />
          </div>
          <div>
            <ConsumptionContainer image={"assets/infos/icon-energy.webp"} title={t("Energy")} data={2.6} type={"kWh"} />
          </div>
        </div>
      </div>
    </div>
  )
}
