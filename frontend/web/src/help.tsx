import React from 'react';
import Titles from "./Components/Text/Titles";
import VideosContainer from "./Components/Videos/VideosContainer";
import ContactForms from "./Components/Forms/ContactForms";
import {useTranslation} from "react-i18next";

export default function Help() {

  const { t } = useTranslation();

  const videos = [
    {title: t("InstallCaptor"), link: "assets/videos/video1.mp4"},
    {title: t('UseApp'), link: "assets/videos/video2.mp4"},
  ]

  return (
    <div className="ml-[20%] w-[80%] flex items-center justify-center">
      <div className={"flex flex-col gap-16 px-24 py-16"}>
        <Titles title={t("NeedHelp")} />
        {videos && videos.map((video, index) => {
          return <VideosContainer key={index} title={video.title} video={video.link} />
        })}
        <ContactForms />
      </div>
    </div>
  )
}