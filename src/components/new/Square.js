import React from "react";
import Circle from "../old/Circle";
import Cross from "../old/Cross";

const renderSvg = (svg) => {
  if (svg === "cross") {
    return <Cross size={55} />;
  } else if (svg === "circle") {
    return <Circle size={55} />;
  } else {
    return null;
  }
};

const Square = ({ value, onClick, isWinningIndex }) => {
  return (
    <div
      className={isWinningIndex ? "square winner" : "square"}
      onClick={onClick}
    >
      {renderSvg(value)}
    </div>
  );
};

export default Square;
