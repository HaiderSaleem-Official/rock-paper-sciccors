import React, { useContext, useEffect, useState } from "react";
import { GameContext } from "./GameContext";

const Result = () => {
  const { userChoice, setComputerChoice, computerChoice } =
    useContext(GameContext);
  const [result, setResult] = useState("");

  const options = ["Rock", "Paper", "Sciccors"];

  useEffect(() => {
    if (userChoice) {
      const randomChoice = options[Math.floor(Math.random() * options.length)];
      setComputerChoice(randomChoice);

      if (userChoice === randomChoice) {
        setResult("It's a Draw!");
      } else if (
        (userChoice === "Rock" && randomChoice === "Sciccors") ||
        (userChoice === "Paper" && randomChoice === "Rock") ||
        (userChoice === "Sciccors" && randomChoice === "Paper")
      ) {
        setResult("You Win!");
      } else {
        setResult("You Lose!");
      }
    }
  }, [userChoice]);

  return (
    <div>
      <h2>Your Choice: {userChoice}</h2>
      <h2>Computer's Choice: {computerChoice}</h2>
      <h2>Result: {result}</h2>
    </div>
  );
};

export default Result;
