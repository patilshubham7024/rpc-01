import { useState } from "react";
import UserInput from "./UserInput";
import "./RPS.css";

export default function RPC({onBack}) {
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
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
      setUserScore(prev => prev + 1);
    } else {
      setWinner("Computer");
      setComputerScore(prev => prev + 1);
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
        {userChoice && <p>User Choice: <span>{userChoice}</span></p>}
        {computerChoice && <p>Computer Choice: <span>{computerChoice}</span></p>}
        {winner && <p className={`winner ${winner.toLowerCase()}`}>Winner: <strong>{winner}</strong></p>}
      </div>

      <div className="scores">
        <div className="score">User Score: <span>{userScore}</span></div>
        <div className="score">Computer Score: <span>{computerScore}</span></div>
      </div>
    </div>
  );
}
