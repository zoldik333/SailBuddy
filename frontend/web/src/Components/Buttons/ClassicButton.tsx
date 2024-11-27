import React from 'react';

interface ClassicButtonProps {
  content: string;
  onClick: () => void;
}

export default function ClassicButton({ content, onClick = () => {} }: ClassicButtonProps) {
  return (
    <div className="w-auto p-4 bg-[#FEFCF4] rounded-full flex items-center justify-center px-16 cursor-pointer" onClick={onClick}>
      <div className={"text-[#1A2B78] font-bold text-[1.3em]"}>{content}</div>
    </div>
  );
}