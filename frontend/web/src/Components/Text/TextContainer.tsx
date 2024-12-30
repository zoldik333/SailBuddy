import React from 'react';
import {useTranslation} from "react-i18next";

interface TextContainerProps {
  title: string;
  content: string;
}

export default function TextContainer({ title, content }: TextContainerProps) {

  const { t } = useTranslation();

  return (
    <div className="bg-[#FFE8D7] w-[30em] h-auto p-14 rounded-2xl flex flex-col items-center gap-8">
      <div className={"text-[#1A2B78] font-bold text-[1.3em] text-center"}>
        {t('Your')} <span className="text-[#EF4445]">{title}</span> {t('InRealTime')}
      </div>
      <div className={"text-[#1A2B78] text-[1.2em]"}>{content}</div>
    </div>
  );
}