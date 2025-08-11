import { useState } from "react";
import UserInput from "./UserInput";
import "./RPS.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increaseScore, resetScore } from "../redux/rpsSlice"

export default function RPS({ onBack }) {
  const players = useSelector((state) => state.rps.players);
  const dispatch = useDispatch();

  const player01 = players.find((p) => p.player === "User");

  const player02 = players.find((p) => p.player === "Brad");

  const scoreIncrement = (id) => {
    dispatch(increaseScore(id));
  }

  const scoreReset = () => {
    dispatch(resetScore());
  }

  const [winner, setWinner] = useState("");
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");

  function onUserClick(userInput) {
    playRPS(userInput);
  }

  function playRPS(playerChoice) {
    const choices = ["Rock", "Paper", "Scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    setUserChoice(playerChoice);
    setComputerChoice(computerChoice);

    if (playerChoice === computerChoice) {
      setWinner("Tie");
      return;
    }

    const userWins =
      (playerChoice === "Rock" && computerChoice === "Scissors") ||
      (playerChoice === "Paper" && computerChoice === "Rock") ||
      (playerChoice === "Scissors" && computerChoice === "Paper");

    if (userWins) {
      setWinner("User");
      scoreIncrement("User");
    } else {
      setWinner("Computer");
      scoreIncrement("Brad");
    }
  }

  return (
    <div className="rpc-container">
      <button className="back-btn" onClick={onBack}>
        ← Back to Home
      </button>
      <h2>Rock - Paper - Scissors</h2>

      <UserInput onUserClick={onUserClick} />

      <div className="results">
        {userChoice && <p>{player01.player}'s Choice: <span>{userChoice}</span></p>}
        {computerChoice && <p>{player02.player}'s Choice: <span>{computerChoice}</span></p>}
        {winner && <p className={`winner ${winner.toLowerCase()}`}>Winner: <strong>{winner}</strong></p>}
      </div>

      <div className="scores">
        <div className="score">{player01.player}'s Score: <span>{player01.score}</span></div>
        <div className="score">{player02.player}'s Score: <span>{player02.score}</span></div>
      </div>
      <button
        className="reset-btn"
        onClick={() => scoreReset()}
      >
        Reset Scores
      </button>
    </div>
  );
}
