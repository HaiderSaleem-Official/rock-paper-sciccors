import React, { useContext } from "react";
import "./Card.css";
import { GameContext } from "./GameContext";

const Card = ({ Img, name }) => {
  const { setUserChoice } = useContext(GameContext);

  const handleClick = () => {
    setUserChoice(name);
  };

  return (
    <div className="card" onClick={handleClick}>
      <h3>{name}</h3>
      <img src={Img} className="img" alt={name} />
    </div>
  );
};

export default Card;
