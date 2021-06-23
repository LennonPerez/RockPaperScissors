import { useState, useEffect } from "react";
import Reset from "./Reset";

const Result = ({ selection, setSelection, cpu, cpuOption, updateScore }) => {
  const [message, setMessage] = useState("");
  const [reset, setReset] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setResult = () => {
    if (selection === "paper" && cpu === "rock") {
      setMessage("YOU WIN");
    } else if (selection === "rock" && cpu === "scissors") {
      setMessage("YOU WIN");
    } else if (selection === "scissors" && cpu === "paper") {
      setMessage("YOU WIN");
    } else if (selection === "paper" && cpu === "scissors") {
      setMessage("YOU LOOSE");
    } else if (selection === "scissors" && cpu === "rock") {
      setMessage("YOU LOOSE");
    } else if (selection === "rock" && cpu === "paper") {
      setMessage("YOU LOOSE");
    } else {
      setMessage("DRAW");
    }
  };

  const resetGame = () => {
    setSelection("");
    cpuOption("");
  };

  useEffect(() => {
    setResult();
    setTimeout(() => {
      setReset(true);
    }, 3500);
  }, [selection, cpu, setResult]);

  return (
    <div className="container container-result">
      <div className="row1 row2 row1-result">
        <div className={`option ${selection}`} style={{ margin: "0" }}></div>
        <div className={`option ${cpu}`} style={{ margin: "0" }}></div>
      </div>
      <div className="row-p">
        <p>you picked</p>
        <p>the house picked</p>
      </div>
      <div className="row2 row2-result">
        {reset ? (
          <Reset
            message={message}
            resetGame={resetGame}
            updateScore={updateScore}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Result;
