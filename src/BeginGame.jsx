import "./beginGame.css";
import { useState, useEffect } from "react";
import DiceRoll from "./DiceRoll";
import CompareScores from "./CompareScores";

function BeginGame() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameRestart, setGameRestart] = useState(false);
  const [diceRoll1, setDiceRoll1] = useState(0);
  const [diceRoll2, setDiceRoll2] = useState(0);

  const handleClick = () => {
    setGameStarted(true);
  };

  const restartHandleClick = () => {
    setGameRestart(true);
  };

  useEffect(() => {
    if (gameRestart) {
      setGameStarted(false);

      setDiceRoll1(0);
      setDiceRoll2(0);

      setGameRestart(false);
    }
  }, [gameRestart]);

  return (
    <>
      <h1 className="gameHeader">
        Welcome to Dice Battle! <br /> <br />
        Players....take your positions!{" "}
      </h1>

      <button onClick={handleClick} className="startButton">
        Press Enter!
      </button>

      <div className="gameBox">
        {gameStarted && (
          <div className="gameScreen">
            <div className="gameCardContainer">
              <div className="gameCards">
                <div className="card">
                  <DiceRoll
                    player="one"
                    diceRoll={diceRoll1}
                    setDiceRoll={setDiceRoll1}
                  />
                </div>
                <div className="card">
                  <DiceRoll
                    player="two"
                    diceRoll={diceRoll2}
                    setDiceRoll={setDiceRoll2}
                  />
                </div>
                <div className="card">
                  <CompareScores diceRoll1={diceRoll1} diceRoll2={diceRoll2} />
                </div>
              </div>
            </div>
            <div className="restartButton">
              <button
                onClick={() => restartHandleClick(false)}
                className="restartButton"
              >
                Press to restart game!
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default BeginGame;
