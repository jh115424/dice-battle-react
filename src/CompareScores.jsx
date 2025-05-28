import "./compareScores.css";
import { useState } from "react";

function CompareScores({ diceRoll1, diceRoll2 }) {
  const [results, setShowResults] = useState(false);

  const resultsHandleClick = () => {
    setShowResults((prev) => !prev);
  };

  return (
    <div className="playerResults">
      <button onClick={resultsHandleClick} className="showResultsButton">
        Top Player Results!
      </button>

      <div className="resultsCard">
        {results && (
          <p>
            {diceRoll1 > diceRoll2
              ? "Player One wins!"
              : diceRoll2 > diceRoll1
              ? "Player Two wins!"
              : diceRoll1 === 0 && diceRoll2 === 0
              ? ""
              : "It's a tie!"}
          </p>
        )}
      </div>
    </div>
  );
}

export default CompareScores;
