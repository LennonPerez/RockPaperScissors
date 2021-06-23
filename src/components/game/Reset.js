import { Fragment, useEffect } from "react";

const Reset = ({ message, resetGame, updateScore }) => {
  useEffect(() => {
    if (message === "YOU WIN") {
      updateScore("+");
    } else if (message === "YOU LOOSE") {
      updateScore("-");
    } else {
      updateScore("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);
  return (
    <Fragment>
      <h2>{message}</h2>
      <button onClick={resetGame}>PLAY AGAIN</button>
    </Fragment>
  );
};

export default Reset;
