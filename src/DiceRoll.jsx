import "./diceRoll.css";

function DiceRoll({ player, diceRoll, setDiceRoll }) {
  return (
    <div className="playerDice">
      {player === "one" && (
        <>
          <button
            onClick={() => setDiceRoll(Math.floor(Math.random() * 6) + 1)}
            className="startGame"
          >
            Player One | {diceRoll}
          </button>

          <div className="diceDots">
            {diceRoll > 0 &&
              Array.from({ length: diceRoll }).map((_, index) => (
                <span key={index} className="dots">
                  •
                </span>
              ))}
          </div>
        </>
      )}

      {player === "two" && (
        <>
          <button
            onClick={() => setDiceRoll(Math.floor(Math.random() * 6) + 1)}
            className="startGame2"
          >
            Player Two | {diceRoll}
          </button>

          <div className="diceDots2">
            {diceRoll > 0 &&
              Array.from({ length: diceRoll }).map((_, index) => (
                <span key={index} className="dots">
                  •
                </span>
              ))}
          </div>
        </>
      )}
    </div>
  );
}

export default DiceRoll;
