import React from 'react';

interface TitlesProps {
  title: string;
  size?: number;
  color?: string;
  fontWeight ?: string;
}

export default function Titles({ title, size = 2, color = "#1A2B78", fontWeight }: TitlesProps) {
  return (
    <div className="font-bold" style={{ fontSize: `${size}rem`, color: color, fontWeight: fontWeight }}>
      {title}
    </div>
  );
}