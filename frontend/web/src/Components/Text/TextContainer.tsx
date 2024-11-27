import React from 'react';

interface TextContainerProps {
  title: string;
  content: string;
}

export default function TextContainer({ title, content }: TextContainerProps) {
  return (
    <div className="bg-[#FFE8D7] w-[30em] h-auto p-14 rounded-2xl flex flex-col items-center gap-8">
      <div className={"text-[#1A2B78] font-bold text-[1.3em] text-center"}>
        Votre <span className="text-[#EF4445]">{title}</span> en temps réel
      </div>
      <div className={"text-[#1A2B78] text-[1.2em]"}>{content}</div>
    </div>
  );
}