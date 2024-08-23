import React, { createContext, useState } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);

  return (
    <GameContext.Provider
      value={{ userChoice, setUserChoice, computerChoice, setComputerChoice }}
    >
      {children}
      {console.log(children)}
    </GameContext.Provider>
  );
};
