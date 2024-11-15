import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="w-full bg-[#D0EBF7] h-auto flex items-center justify-between px-16 py-8">
      <Link to={"/"}>
        <img src="/assets/navbar/logo-sailbuddy.png" alt="" className="h-20 cursor-pointer"/>
      </Link>
      <div className={"flex items-center gap-32"}>
        <Link to={"/historique"}>
          <div className={"font-bold text-[#1A2B78] text-2xl cursor-pointer"}>Historique</div>
        </Link>
        <Link to={"/aide"}>
          <div className={"font-bold text-[#1A2B78] text-2xl cursor-pointer"}>Aide</div>
        </Link>
        <Link to={"/profil"}>
          <div className={"cursor-pointer"}><img src={"/assets/navbar/profil.png"} alt={"Profil"} className={"h-16"}/></div>
        </Link>
      </div>
    </div>
  )
};
