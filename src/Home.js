import { useState } from "react";
import RPS from "./components/RPS";
import CB from "./components/CB";
import "./Home.css";

export default function HomePage() {
  const [activeGame, setActiveGame] = useState(null);
  const callbreakURL = "https://callbreak-scorer.netlify.app/";

  const games = [
    { id: "rps", name: "Rock - Paper - Scissors", component: <RPS onBack={() => setActiveGame(null)} /> },
    { id: "db", name: "Call Break", component: <CB callbreakURL={callbreakURL} home={() => setActiveGame(null)} /> },
  ];

  if (activeGame) {
    const game = games.find(g => g.id === activeGame);
    return game.component;
  }

  return (
    <div className="homepage-container">
      <div className="start-screen">
        <h1 className="title">🎮 Welcome to the Game Hub</h1>
        <p className="subtitle">Choose a game to play:</p>

        <div className="game-list">
          {games.map(game => (
            <button
              key={game.id}
              className="game-btn"
              onClick={() => setActiveGame(game.id)}
            >
              {game.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
