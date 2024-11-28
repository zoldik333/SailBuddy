import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed flex top-0 left-0 h-full w-[20%] bg-[#FFD3B9] flex-col items-center py-16 shadow-lg">

      <div className="flex flex-1 flex-col items-center gap-12">
        <Link to={"/"} className={"relative"}>
          <div
            className={`font-bold text-[#1A2B78] text-xl px-4 py-2 rounded-lg relative z-10`}
          >
            Accueil
          </div>
          <div className={`absolute inset-0 ${isActive('/') ? 'link-active' : ''}`}></div>
        </Link>
        <Link to={"/dashboard"}>
          <div
            className={`font-bold text-[#1A2B78] text-xl px-4 py-2 rounded-lg ${
              isActive('/dashboard') ? 'link-active' : ''
            }`}
          >
            Tableau de bord
          </div>
        </Link>
        <Link to={"/history"}>
          <div
            className={`font-bold text-[#1A2B78] text-xl px-4 py-2 rounded-lg ${
              isActive('/history') ? 'link-active' : ''
            }`}
          >
            Historique
          </div>
        </Link>
        <Link to={"/profile"}>
          <div
            className={`font-bold text-[#1A2B78] text-xl px-4 py-2 rounded-lg ${
              isActive('/profile') ? 'link-active' : ''
            }`}
          >
            Profil
          </div>
        </Link>
        <Link to={"/help"}>
          <div
            className={`font-bold text-[#1A2B78] text-xl px-4 py-2 rounded-lg ${
              isActive('/help') ? 'link-active' : ''
            }`}
          >
            Aide
          </div>
        </Link>
      </div>

        <img
          src="/assets/navbar/logo-sailbuddy.png"
          alt=""
          className="h-20"
        />
    </div>
  );
}