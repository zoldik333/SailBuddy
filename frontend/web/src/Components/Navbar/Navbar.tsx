import React from 'react';
import {Link, useLocation} from 'react-router-dom';
export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-full bg-[#D0EBF7] h-auto flex items-center justify-between px-16 py-8">
      <Link to={"/"}>
        <img src="/assets/navbar/logo-sailbuddy.png" alt="" className="h-20 cursor-pointer" />
      </Link>

      <div className="flex items-center gap-32">
        <div className="flex flex-col items-center relative">
          <Link to={"/historique"}>
            <div className="z-20 font-bold text-[#1A2B78] text-2xl cursor-pointer relative">Historique</div>
          </Link>
          {isActive('/historique') && (
            <div className="w-[110%] h-[4px] bg-[#EF4445] absolute bottom-[5px] z-0"></div>
          )}
        </div>

        <div className="flex flex-col items-center relative">
          <Link to={"/aide"}>
            <div className="z-10 font-bold text-[#1A2B78] text-2xl cursor-pointer relative">Aide</div>
          </Link>
          {isActive('/aide') && (
            <div className="w-[110%] h-1.5 bg-[#EF4445] absolute bottom-[5px] z-0"></div>
          )}
        </div>

        <div className="cursor-pointer">
          <Link to={"/profil"}>
            <img src="/assets/navbar/profil.png" alt={"Profil"} className="h-16" />
          </Link>
        </div>
      </div>
    </div>
  );
}
