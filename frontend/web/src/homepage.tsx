import React from 'react';
import Titles from "./Components/Text/Titles";
import TextContainer from "./Components/Text/TextContainer";
import ProfileDashboard from "./Components/Informations/ProfileDashboard";

function Homepage() {
  return (
    <div className="flex">
      <div className="ml-[20%] w-[80%]">
        <div className="w-[65%] flex justify-center items-center py-16">
          <div className={"flex justify-center flex-col items-center gap-16"}>
            <div className={"w-[60%]"}>
              <Titles title={"Naviguez l'esprit léger, Nous gérons le reste"} fontWeight={"bold"} size={2.5}/>
            </div>
            <div className="flex flex-col gap-16">
              <TextContainer title={"consommation d'eau"} content={"Gardez un contrôle précis de vos réserves d’eau potable. Grâce à nos capteurs connectés, SailBuddy affiche en temps réel le pourcentage d'eau restant dans vos réservoirs, afin que vous puissiez anticiper vos besoins. Quand le niveau descend sous le seuil critique qui est de 20% d’eau restante dans votre cuve, une notification vous avertit pour vous permettre de planifier votre prochaine escale en toute sérénité."} />
              <TextContainer title={"consommation d’énergie"} content={"Gardez une vue d'ensemble sur l'autonomie énergétique de votre voilier. SailBuddy vous indique en temps réel l'état de charge de vos batteries, vous permettant ainsi de gérer efficacement votre consommation. En cas de baisse significative, une alerte est envoyée pour que vous puissiez adapter vos usages ou prévoir un point de recharge à la prochaine escale."} />
            </div>
          </div>
        </div>
      </div>

      <ProfileDashboard />
    </div>
  );
}

export default Homepage;
