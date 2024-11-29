import React from 'react';
import {useTranslation} from "react-i18next";

interface InformationContentProps {
  title: string;
  content: string;
}

function InformationContent({title, content} : InformationContentProps) {
  return (
    <div className={"text-[#1A2B78] text-[1.2em]"}>
      {title} : <span className={"font-bold"}>{content}</span>
    </div>
  )
}

export default function ProfileInformation() {

  const {t} = useTranslation();

  return (
    <div className={"w-full h-auto flex flex-row bg-[#FFE8D7] p-16 rounded-2xl gap-16"}>
      <img src={"assets/profile/profile_template.png"} alt={""} className={"w-64 h-64 object-cover rounded-2xl"}/>
      <div className={"flex flex-col justify-between"}>
        <div className={"text-[#1A2B78] font-bold text-[1.3em]"}>Nom Prénom</div>
        <InformationContent title={t("Adress")} content={"13015 Chem. du Littoral, 13015 Marseille"}/>
        <InformationContent title={t("Email")} content={"nom.prenom@gmail.com"}/>
        <InformationContent title={t("Phone")} content={"07.86.54.87.65"}/>
        <InformationContent title={t("Password")} content={"**********"}/>
        <div className={"text-[#1A2B78] underline cursor-pointer"}>{t("ForgotPassword")}</div>
      </div>
    </div>
  )
}
