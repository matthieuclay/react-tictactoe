import React from "react";

const PlayerInfo = ({ winner, turn }) => {
  return winner ? (
    <p>Winner: {winner}</p>
  ) : (
    <p>Next player: {turn ? "X" : "O"}</p>
  );
};

export default PlayerInfo;
