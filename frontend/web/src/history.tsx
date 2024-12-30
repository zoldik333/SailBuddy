import React from "react";
import Titles from "./Components/Text/Titles";
import DateDropdown from "./Components/Selectors/DateDropdown";
import TemplateLineChart from "./Components/Graphics/TemplateLineChart";
import {useTranslation} from "react-i18next";

const History: React.FC = () => {

  const { t } = useTranslation();

  const waterData = [
    { date: t('Monday'), value: 20 },
    { date: t('Tuesday'), value: 40 },
    { date: t('Wednesday'), value: 60 },
    { date: t('Thursday'), value: 85 },
    { date: t('Friday'), value: 98 },
    { date: t('Saturday'), value: 120 },
    { date: t('Sunday'), value: 143  },
  ];

  const energyData = [
    { date: t('Monday'), value: 3 },
    { date: t('Tuesday'), value: 8 },
    { date: t('Wednesday'), value: 11 },
    { date: t('Thursday'), value: 15 },
    { date: t('Friday'), value: 16 },
    { date: t('Saturday'), value: 22 },
    { date: t('Sunday'), value: 31  },
  ];
  return (
    <div className="ml-[20%] w-[80%] px-32 py-16">
      <div className={"flex flex-col gap-8"}>
        <Titles title={t("HistoryCons")} size={2.5} />
        <div className={"flex flex-row gap-4 items-start justify-between"}>
          <div className={"flex flex-row gap-8"}>
            <div className={"text-[1.5em] text-[#1A2B78] font-bold"}>
              {t('ViewHistory')}
            </div>
            <DateDropdown />
          </div>
          <img src={"assets/infos/calendar.png"} alt={""} className={"h-32 w-32 object-cover"} />
        </div>
        <TemplateLineChart data={waterData} type={0} />
        <TemplateLineChart data={energyData} type={1} step={3}/>
      </div>
    </div>
  );
};

export default History;
