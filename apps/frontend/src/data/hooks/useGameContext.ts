import React, { useContext } from "react";
import { GameContext } from "../contexts/GameContext";

function useGameContext() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGameContext deve ser usado dentro de um GameProvider");
  }
  return context;
}
export default useGameContext;
