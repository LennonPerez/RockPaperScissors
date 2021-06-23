import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const Game = () => {
  const [score, setScore] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [point, setPoint] = useState(1);

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
