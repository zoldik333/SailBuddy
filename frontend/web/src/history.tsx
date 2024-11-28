import React from "react";
import Titles from "./Components/Text/Titles";
import DateDropdown from "./Components/Selectors/DateDropdown";
import TemplateLineChart from "./Components/Graphics/TemplateLineChart";

const History: React.FC = () => {
  const waterData = [
    { date: "Lundi", value: 20 },
    { date: "Mardi", value: 40 },
    { date: "Mercredi", value: 60 },
    { date: "Jeudi", value: 85 },
    { date: "Vendredi", value: 98 },
    { date: "Samedi", value: 120 },
    { date: "Dimanche", value: 143  },
  ];

  const energyData = [
    { date: "Lundi", value: 3 },
    { date: "Mardi", value: 8 },
    { date: "Mercredi", value: 11 },
    { date: "Jeudi", value: 15 },
    { date: "Vendredi", value: 16 },
    { date: "Samedi", value: 22 },
    { date: "Dimanche", value: 31  },
  ];
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
        <TemplateLineChart data={waterData} type={"eau"} />
        <TemplateLineChart data={energyData} type={"énergie"} step={3}/>
      </div>
    </div>
  );
};

export default History;
