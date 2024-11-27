import React from 'react';
import Titles from "../Text/Titles";

export default function ProfileDashboard() {
  return (
    <div className="bg-[#FFD3B9] h-screen w-[30%] fixed top-0 right-0 rounded-l-3xl p-16">
      <div className={"flex flex-row gap-8"}>
          <img src={"assets/profile/profile_template.png"} alt={""} className="h-36 w-36 object-cover rounded-2xl border-l-4 border-b-4 border-[#1A2B78]" />
        <div className={"h-auto flex flex-col justify-between"}>
          <Titles title={"Prénom"} size={2.4} />
          <div className={"text-[#1A2B78] font-bold text-[1.5em]"}>Propriétaire du bateau ...</div>
        </div>
      </div>
    </div>
  )
}