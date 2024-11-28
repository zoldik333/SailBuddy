import React from "react";
import Wavify from "react-wavify";

interface WaterContainerProps {
  value: number;
  size?: number;
}

export default function WaterContainer({ value, size = 300 }: WaterContainerProps) {
  const fillColor =
    value > 80
      ? "#1A2B78"
      : value > 60
        ? "#4F316B"
        : value > 40
          ? "#85385F"
          : value > 20
            ? "#BA3E52"
            : "#EF4445";

  const adjustedWaterHeight = 100 - value * 0.9;

  return (
    <div
      className="relative"
      style={{
        width: size,
        height: size,
        border: `4px solid #1A2B78`,
        borderRadius: "16px",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#ffffff",
      }}
    >
      <Wavify
        fill={fillColor}
        options={{
          height: 25,
          amplitude: 20,
          speed: 0.25,
          points: 4,
        }}
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: "120%",
          transform: `translateY(${adjustedWaterHeight}%)`,
        }}
      />

      {[...Array(10)].map((_, index) => {
        const bubbleSize = Math.random() * 10 + 5;

        return (
          <div
            key={index}
            className="absolute bubble"
            style={{
              width: `${bubbleSize}px`,
              height: `${bubbleSize}px`,
              backgroundColor: fillColor,
              bottom: `${Math.random() * (size * (value / 100))}px`,
              left: `${Math.random() * size}px`,
              animation: `bubble-rise ${Math.random() * 3 + 2}s ease-in-out infinite`,
              borderRadius: "50%",
              border: `2px solid #1A2B78`,
            }}
          ></div>
        );
      })}

      <style>
        {`
          @keyframes bubble-rise {
            0% {
              transform: translateY(0) scale(1);
              opacity: 0.8;
            }
            100% {
              transform: translateY(-200px) scale(0.6);
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
}
