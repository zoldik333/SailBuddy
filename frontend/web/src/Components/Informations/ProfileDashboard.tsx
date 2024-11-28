import React from 'react';
import Titles from "../Text/Titles";
import ClassicButton from "../Buttons/ClassicButton";
import ConsumptionContainer from "./ConsumptionContainer";
import { useNavigate } from 'react-router-dom';

export default function ProfileDashboard() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#FFD3B9] h-screen w-[30%] fixed top-0 right-0 rounded-l-3xl p-16 flex flex-col gap-16">
      <div className={"flex flex-row gap-8"}>
          <img src={"assets/profile/profile_template.png"} alt={""} className="h-36 w-36 object-cover rounded-2xl border-l-4 border-b-4 border-[#1A2B78]" />
        <div className={"h-auto flex flex-col justify-between"}>
          <Titles title={"Prénom"} size={2.4} />
          <div className={"text-[#1A2B78] font-bold text-[1.5em]"}>Propriétaire du bateau ...</div>
        </div>
      </div>
      <div className={"flex flex-col items-center gap-8"}>
        <ClassicButton content={"Accéder à mon profil"} onClick={() => navigate('/profile')}/>
        <Titles title={"Votre consommation journalière"} size={1.5}/>
        <div className="flex flex-col w-full h-auto gap-8">
          <div className="border-b-2 border-[#1A2B78] pb-8">
            <ConsumptionContainer image={"assets/infos/water.png"} title={"Eau"} data={36} type={"L"}/>
          </div>
          <div>
            <ConsumptionContainer image={"assets/infos/energy.png"} title={"Énergie"} data={2.6} type={"kWh"}/>
          </div>
        </div>
      </div>
    </div>
  )
}
