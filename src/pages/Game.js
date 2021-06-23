import { useState } from "react";
import Header from "../components/game/Header";
import Main from "../components/game/Main";
import Footer from "../components/game/Footer";

const Game = () => {
  const [score, setScore] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [point, setPoint] = useState(1);

  if (score < 0) {
    setScore(0);
  }

  const updateScore = (e) => {
    if (e === "+") {
      setScore(score + point);
    } else if (e === "-") {
      setScore(score - point);
    } else {
      setScore(score);
    }
  };

  return (
    <div className="game-container">
      <Header score={score} />
      <Main updateScore={updateScore} />
      <Footer />
    </div>
  );
};

export default Game;
