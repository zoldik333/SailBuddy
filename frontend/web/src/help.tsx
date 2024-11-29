import React from 'react';
import Titles from "./Components/Text/Titles";
import VideosContainer from "./Components/Videos/VideosContainer";
import ContactForms from "./Components/Forms/ContactForms";

export default function Help() {

  const videos = [
    {title: "Comment installer nos capteurs à bord ?", link: "assets/videos/video1.mp4"},
    {title: "Comment utiliser l’application ?", link: "assets/videos/video2.mp4"},
  ]

  return (
    <div className="ml-[20%] w-[80%] flex items-center justify-center">
      <div className={"flex flex-col gap-16 px-24 py-16"}>
        <Titles title={"Besoin d'aide ?"} />
        {videos && videos.map((video, index) => {
          return <VideosContainer key={index} title={video.title} video={video.link} />
        })}
        <ContactForms />
      </div>
    </div>
  )
}