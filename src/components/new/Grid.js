import React from "react";
import Circle from "./Circle";
import Cross from "./Cross";

const renderSvg = (svg) => {
  if (svg === "cross") {
    return <Cross size={75} />;
  } else if (svg === "circle") {
    return <Circle size={75} />;
  } else {
    return null;
  }
};

const Grid = ({ positions, setPositions, winningIndexes }) => {
  const divisions = positions.map((value, index) => {
    const isWinningIndex = winningIndexes.includes(index);
    return (
      <div
        key={index}
        className={isWinningIndex ? "winner" : ""}
        onClick={() => setPositions(index)}
      >
        {renderSvg(value)}
      </div>
    );
  });

  return <div className="grid">{divisions}</div>;
};

export default Grid;
