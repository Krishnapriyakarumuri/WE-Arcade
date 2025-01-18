import React, { useRef, forwardRef, useImperativeHandle } from "react";
import Player from "./player.js";

const PlayerRow = forwardRef(({ toBeKilledArray }, ref) => {
  const playerRefs = useRef([]);

  const startFallingAllPlayers = () => {
    playerRefs.current.forEach((playerRef) => {
      if (playerRef) {
        playerRef.startFalling();
      }
    });
  };

  useImperativeHandle(ref, () => ({
    startFallingAllPlayers,
  }));

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {toBeKilledArray.map((toBeKilled, index) => (
        <Player
          key={index}
          left={`${10 + index * 15}%`}
          animationDuration={5000}
          toBeKilledTimeout={2000}
          bottomPercentage={32}
          to_be_killed={toBeKilled}
          ref={(el) => (playerRefs.current[index] = el)}
        />
      ))}
    </div>
  );
});

export default PlayerRow;
