import React from 'react';
import Titles from "./Components/Text/Titles";
import ProfileInformation from "./Components/Informations/ProfileInformation";

export default function Profile() {
  return (
    <div className="ml-[20%] w-[80%] flex flex-col gap-8 p-32">
      <div className={"flex flex-row justify-between items-center"}>
        <Titles title={"Bonjour, Prénom !"} />
        <div className={"flex flex-row gap-8 items-center"}>
          <img src={"assets/profile/globe.png"} alt={""} className="h-12 w-12 object-cover"/>
          <div className={"text-[#1A2B78] text-[1.5em] font-bold"}>Français</div>
        </div>
      </div>
      <ProfileInformation />
    </div>
  )
}
