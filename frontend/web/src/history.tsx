import React from "react";
import Titles from "./Components/Text/Titles";
import DateDropdown from "./Components/Selectors/DateDropdown";

const History: React.FC = () => {
  return (
    <div className="ml-[20%] w-[80%] px-32 py-16">
      <div className={"flex flex-col gap-8"}>
        <Titles title={"Votre historique de consommation"} size={2.5} />
        <div className={"flex flex-row gap-4 items-start justify-between"}>
          <div className={"flex flex-row gap-8"}>
            <div className={"text-[1.5em] text-[#1A2B78] font-bold"}>
              Visualisez votre historique en
            </div>
            <DateDropdown />
          </div>
          <img src={"assets/infos/calendar.png"} alt={""} className={"h-32 w-32 object-cover"} />
        </div>
      </div>
    </div>
  );
};

export default History;
