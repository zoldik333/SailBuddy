import React, {useState} from 'react';
import Titles from "./Components/Text/Titles";
import ProfileInformation from "./Components/Informations/ProfileInformation";
import {useTranslation} from "react-i18next";

export default function Profile() {

  const [language, setLanguage] = useState('fr');

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage('en');
  };

  return (
    <div className="ml-[20%] w-[80%] flex flex-col gap-8 px-24 py-16">
      <div className={"flex flex-row justify-between items-center"}>
        <Titles title={`${t('Hello')}, Prénom !`} />
        <div className={"flex flex-row gap-8 items-center"}>
          <div className={"cursor-pointer"} onClick={() => changeLanguage(language === 'en' ? 'fr' : 'en')}>
            <img src={"assets/profile/globe.png"} alt={""} className="h-12 w-12 object-cover"/>
          </div>
          <div className={"text-[#1A2B78] text-[1.5em] font-bold"}>{t("Language")}</div>
        </div>
      </div>
      <ProfileInformation />
    </div>
  )
}
