import React from 'react';
import Titles from "./Components/Text/Titles";
import ProfileDashboard from "./Components/Informations/ProfileDashboard";
import QuantityContainer from "./Components/Informations/QuantityContainer";
import {useTranslation} from "react-i18next";

export default function Dashboard() {

  const { t } = useTranslation();

  return (
    <div className="flex">
      <div className="ml-[20%] w-[80%]">
        <div className="w-[60%] flex justify-center items-center py-16">
          <div className={"flex justify-center flex-col items-center gap-16"}>
            <div className={"w-full"}>
              <Titles title={t("DashboardText")} fontWeight={"bold"} size={2.5}/>
            </div>
            <QuantityContainer quantity={60} type={0} />
            <QuantityContainer quantity={36} type={1}/>
          </div>
        </div>
      </div>

      <ProfileDashboard/>
    </div>
  )
}