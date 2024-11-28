import React from 'react';

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
  return (
    <div className={"w-full h-auto flex flex-row bg-[#FFE8D7] p-16 rounded-2xl gap-16"}>
      <img src={"assets/profile/profile_template.png"} alt={""} className={"w-64 h-64 object-cover rounded-2xl"}/>
      <div className={"flex flex-col justify-between"}>
        <div className={"text-[#1A2B78] font-bold text-[1.3em]"}>Nom Prénom</div>
        <InformationContent title={"Adresse"} content={"13015 Chem. du Littoral, 13015 Marseille"}/>
        <InformationContent title={"E-mail"} content={"nom.prenom@gmail.com"}/>
        <InformationContent title={"Tel."} content={"07.86.54.87.65"}/>
        <InformationContent title={"Mot de passe"} content={"**********"}/>
        <div className={"text-[#1A2B78] underline cursor-pointer"}>Mot de passe oublié?</div>
      </div>
    </div>
  )
}
