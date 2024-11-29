import React from 'react';
import Titles from "./Components/Text/Titles";
import ProfileDashboard from "./Components/Informations/ProfileDashboard";
import QuantityContainer from "./Components/Informations/QuantityContainer";

export default function Dashboard() {
  return (
    <div className="flex">
      <div className="ml-[20%] w-[80%]">
        <div className="w-[60%] flex justify-center items-center py-16">
          <div className={"flex justify-center flex-col items-center gap-16"}>
            <div className={"w-full"}>
              <Titles title={"Tableau de bord"} fontWeight={"bold"} size={2.5}/>
            </div>
            <QuantityContainer type={"eau"} quantity={60} />
            <QuantityContainer type={"énergie"} quantity={36} />
          </div>
        </div>
      </div>

      <ProfileDashboard/>
    </div>
  )
}