import React from "react";

const PlayerInfo = ({ winner, turn }) => {
  return winner ? <p>Winner: {winner}</p> : <p>Turn : {turn}</p>;
};

export default PlayerInfo;
