import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Navbar.css";
import { useTranslation } from "react-i18next";

export default function Navbar() {

  const location = useLocation();
  const { t } = useTranslation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed flex top-0 left-0 h-full w-[20%] bg-[#FFD3B9] flex-col items-center py-16">

      <div className="flex flex-1 flex-col items-center gap-12 w-full">
        <Link to={"/"} className={"w-full pl-8 flex items-center justify-center"}>
          <div
            className={`font-bold text-[#1A2B78] text-xl px-4 py-2 ${isActive('/') ? 'link-active' : ''
              }`}
          >
            {t('HomePageNav')}
          </div>
        </Link>
        <Link to={"/dashboard"} className={"w-full pl-8 flex items-center justify-center"}>
          <div
            className={`font-bold text-[#1A2B78] text-xl px-4 py-2 text-center ${isActive('/dashboard') ? 'link-active' : ''
              }`}
          >
            {t('DashboardNav')}
          </div>
        </Link>
        <Link to={"/history"} className={"w-full pl-8 flex items-center justify-center"}>
          <div
            className={`font-bold text-[#1A2B78] text-xl px-4 py-2 text-center ${isActive('/history') ? 'link-active' : ''
              }`}
          >
            {t('HistoryNav')}
          </div>
        </Link>
        <Link to={"/profile"} className={"w-full pl-8 flex items-center justify-center"}>
          <div
            className={`font-bold text-[#1A2B78] text-xl px-4 py-2 text-center ${isActive('/profile') ? 'link-active' : ''
              }`}
          >
            {t('ProfileNav')}
          </div>
        </Link>
        <Link to={"/help"} className={"w-full pl-8 flex items-center justify-center"}>
          <div
            className={`font-bold text-[#1A2B78] text-xl px-4 py-2 text-center ${isActive('/help') ? 'link-active' : ''
              }`}
          >
            {t('HelpNav')}
          </div>
        </Link>
      </div>

      <img
        src="/assets/logo-sailbuddy-simple.png"
        alt=""
        className={"w-1/2"}
      />
    </div>
  );
}