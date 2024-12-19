import React from "react";
import "./scrollbar.css";

interface ScrollContainerProps {
  children: React.ReactNode;
  height?: string;
}

const ScrollContainer: React.FC<ScrollContainerProps> = ({ children, height = "300px" }) => {
  return (
    <div
      className="custom-scrollbar overflow-y-scroll"
      style={{ height }}
    >
      {children}
    </div>
  );
};

export default ScrollContainer;
