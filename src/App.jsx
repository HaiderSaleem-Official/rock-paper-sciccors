import React from "react";
import "./App.css";
import Card from "./Card/Card";
import Rock from "./rock.png";
import paper from "./paper.png";
import sciccors from "./sciccor.png";
import { GameContext, GameProvider } from "./Card/GameContext";
import Result from "./Card/Result";

function App() {
  return (
    <GameProvider>
      <div className="main">
        <h2>Select Your Symbol</h2>
        <div className="App">
          <Card Img={Rock} name={"Rock"} />
          <Card Img={paper} name={"Paper"} />
          <Card Img={sciccors} name={"Sciccors"} />
        </div>
        <Result />
      </div>
    </GameProvider>
  );
}

export default App;
